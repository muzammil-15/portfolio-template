"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoCard({ children, className }: BentoCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-8",
                "transition-all duration-300 hover:border-border hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/5",
                "backdrop-blur-sm",
                className
            )}
        >
            {children}
        </div>
    );
}

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("grid auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4", className)}>
            {children}
        </div>
    );
}
