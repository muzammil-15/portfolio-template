"use client";

import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
  children?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  description?: string;
  link: string;
  icon?: React.ReactNode;
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/* ------------------------------------------------------------------ */
/*  Root Container                                                    */
/* ------------------------------------------------------------------ */

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 50);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-5 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible },
          )
          : child,
      )}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Desktop Body                                                      */
/* ------------------------------------------------------------------ */

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "var(--nav-bg-scrolled, rgba(255,225,255,0.05))"
          : "var(--nav-bg, transparent)",
        borderColor: visible
          ? "var(--nav-border-scrolled, transparent)"
          : "var(--nav-border, transparent)",
        boxShadow: visible ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" : "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      className={cn(
        "relative mx-auto hidden w-full max-w-7xl flex-row items-center justify-between border border-transparent px-8 py-3 lg:flex",
        className,
      )}
      style={{
        // CSS vars for light/dark theming — can be overridden
        // @ts-expect-error -- CSS custom properties
        "--nav-bg-scrolled": "hsl(var(--background) / 0.8)",
        "--nav-bg": "transparent",
        "--nav-border-scrolled": "transparent",
        "--nav-border": "transparent",
      }}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Navigation Items (with dropdown support)                          */
/* ------------------------------------------------------------------ */

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (idx: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDropdownOpen(idx);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 150);
  };

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        scheduleClose();
      }}
      className={cn(
        "flex flex-1 flex-row items-center justify-center gap-1",
        className,
      )}
    >
      {items.map((item, idx) => {
        const hasDropdown = item.children && item.children.length > 0;

        return (
          <div
            key={`nav-item-${idx}`}
            className="relative"
            onMouseEnter={() => {
              setHovered(idx);
              if (hasDropdown) openDropdown(idx);
            }}
            onMouseLeave={() => {
              if (hasDropdown) scheduleClose();
            }}
          >
            <a
              onClick={onItemClick}
              className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              href={item.link}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
              {hasDropdown && (
                <ChevronDown className="relative z-10 h-3.5 w-3.5" />
              )}
            </a>

            {/* Dropdown */}
            <AnimatePresence>
              {hasDropdown && dropdownOpen === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  onMouseEnter={() => openDropdown(idx)}
                  onMouseLeave={() => scheduleClose()}
                  className="absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-2 shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
                >
                  {item.children!.map((child, childIdx) => (
                    <a
                      key={`dropdown-${childIdx}`}
                      href={child.link}
                      className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    >
                      {child.icon && (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800">
                          {child.icon}
                        </span>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-neutral-900 dark:text-white">
                          {child.name}
                        </span>
                        {child.description && (
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            {child.description}
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Mobile Navigation                                                 */
/* ------------------------------------------------------------------ */

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "var(--nav-bg-scrolled, rgba(255,225,255,0.05))"
          : "var(--nav-bg, transparent)",
        borderColor: visible
          ? "var(--nav-border-scrolled, transparent)"
          : "var(--nav-border, transparent)",
        boxShadow: visible ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" : "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      className={cn(
        "relative mx-auto flex w-full flex-col px-4 py-3 sm:hidden",
        className,
      )}
      style={{
        // CSS vars for light/dark theming — can be overridden
        // @ts-expect-error -- CSS custom properties
        "--nav-bg-scrolled": "hsl(var(--background) / 0.8)",
        "--nav-bg": "transparent",
        "--nav-border-scrolled": "transparent",
        "--nav-border": "transparent",
      }}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className={cn("overflow-hidden", className)}
        >
          <div className="flex flex-col gap-1 pb-4 pt-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};

/* ------------------------------------------------------------------ */
/*  Logo                                                              */
/* ------------------------------------------------------------------ */

export const NavLogo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href="#"
      className={cn(
        "flex shrink-0 items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white",
        className,
      )}
    >
      {children}
    </a>
  );
};

/* ------------------------------------------------------------------ */
/*  CTA Button                                                        */
/* ------------------------------------------------------------------ */

export const NavButton = ({
  children,
  className,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
} & React.ComponentPropsWithoutRef<"button">) => {
  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
    secondary:
      "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800",
  };

  return (
    <button
      className={cn(
        "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 active:scale-95",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
