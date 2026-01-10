
"use client";

import React from "react";
import { personalData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Welcome to my portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm <span className="text-gradient">{personalData.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
                        {personalData.headline}
                    </p>
                    <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
                        {personalData.summary}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.open("/resume1.pdf", "_blank")}>
                            Download Resume
                            <Download className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="lg" onClick={() => window.open("mailto:" + personalData.email)}>
                            Contact Me
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden md:block" // Hidden on small screens for simpler layout
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
                        {/* Abstract Shapes */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 animate-pulse" />
                        <div className="absolute inset-4 bg-background rounded-full z-10 flex items-center justify-center overflow-hidden border-2 border-white/10">
                            <Image
                                src="/images/WhatsApp Image 2026-01-06 at 9.15.38 PM.jpeg"
                                alt={personalData.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -right-4 z-20 glass-card p-4 rounded-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <Github size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">GitHub</p>
                                <p className="font-bold text-sm">Active Contributor</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -left-8 z-20 glass-card p-4 rounded-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <div className="text-xs font-bold">AI</div>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Focus</p>
                                <p className="font-bold text-sm">AI Integration</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
