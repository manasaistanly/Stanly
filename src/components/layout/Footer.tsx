
import React from "react";
import { personalData } from "@/lib/data";

export function Footer() {
    return (
        <footer className="py-8 bg-black text-center border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
