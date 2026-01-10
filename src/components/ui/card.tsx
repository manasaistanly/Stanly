
import React from "react";
import { cn } from "./button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    gradient?: boolean;
}

export function Card({ className, gradient, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-300 hover:border-white/20",
                gradient && "bg-gradient-to-br from-white/10 to-transparent",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
