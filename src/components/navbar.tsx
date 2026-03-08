"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavLogo,
  NavButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  type NavItem,
} from "@/components/motionx/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Icons } from "@/components/icons";

const navItems: NavItem[] = [
  { name: "Home", link: "#" },
  { name: "Experience", link: "#experience" },
  { name: "Work", link: "#work" },
];

export default function AppNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar className="relative mt-4">
        {/* Desktop */}
        <div className="border hidden sm:flex w-full max-w-4xl rounded-lg mx-auto border-neutral-100 dark:border-white/10">
          <NavBody className="mx-auto flex w-full max-w-4xl items-center justify-between rounded-lg bg-white/80 backdrop-blur-md  px-3 py-2 shadow-md dark:bg-neutral-950/80 dark:shadow-[0_4px_24px_rgba(255,255,255,0.15)]">
            <NavLogo className="pl-3 pr-6 flex items-center justify-center">
              <Icons.logo className="size-8 text-foreground" />
            </NavLogo>
            <NavItems items={navItems} />
            <div className="pl-6 flex items-center gap-3">
              <NavButton variant="primary">Book a Call</NavButton>
              <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-800" />
              <ModeToggle />
            </div>
          </NavBody>
        </div>


        {/* Mobile */}
        <div className="border flex sm:hidden w-[94%] mx-auto rounded-md border-neutral-100 dark:border-white/10">
          <MobileNav className="rounded-md  bg-white/80 backdrop-blur-md  px-3 py-2 shadow-md dark:bg-neutral-950/80 dark:shadow-[0_4px_24px_rgba(255,255,255,0.15)]">
            <MobileNavHeader>
              <NavLogo className="flex items-center justify-center">
                <Icons.logo className="size-8 text-foreground" />
              </NavLogo>
              <div className="flex items-center gap-3">
                <MobileNavToggle
                  isOpen={mobileOpen}
                  onClick={() => setMobileOpen(!mobileOpen)}
                />
                <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-800" />
                <ModeToggle />
              </div>
            </MobileNavHeader>
            <MobileNavMenu
              isOpen={mobileOpen}
              onClose={() => setMobileOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-2 border-t border-neutral-200 px-4 pt-4 dark:border-neutral-700 pb-4">
                <NavButton variant="primary" className="w-full justify-center">
                  Book a Call
                </NavButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </div>
      </Navbar>
    </div>
  );
}
