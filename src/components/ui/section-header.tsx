
import React from "react";
import { cn } from "./button";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    center?: boolean;
}

export function SectionHeader({ title, subtitle, className, center = false }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", center && "text-center", className)}>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-primary/50 mt-4 rounded-full", center && "mx-auto")} />
        </div>
    );
}
