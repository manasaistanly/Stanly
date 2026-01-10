
"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <SectionHeader title="Featured Projects" subtitle="End-to-end applications I've built." />

                <div className="space-y-24">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group relative grid md:grid-cols-2 gap-12 items-center"
        >
            {/* Image Carousel Section */}
            <div className={`relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative w-full h-full group/carousel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full"
                        >
                            {/* 
                     NOTE: Real images are expected at the paths in data.ts
                     If image fails or doesn't exist, alt text helps.
                 */}
                            <Image
                                src={project.images[currentImage]}
                                alt={`${project.title} screenshot ${currentImage + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Controls (only if multiple images) */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
                            >
                                <ChevronRight size={20} />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.map((_: any, i: number) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-colors ${i === currentImage ? "bg-white" : "bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Button variant="secondary" size="sm" className="rounded-full h-8 w-8 p-0" onClick={() => window.open(project.github)}>
                        <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="sm" className="rounded-full h-8 w-8 p-0" onClick={() => window.open(project.demo)}>
                        <ExternalLink className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Content Section */}
            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="mb-8">
                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                        {project.features.map((feature: string) => (
                            <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
