
"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-black/50">
            <div className="container mx-auto px-6">
                <SectionHeader title="Experience" subtitle="My professional journey." />

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 h-full bg-white/10" />

                    <div className="space-y-12">
                        {experience.map((job, idx) => (
                            <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start">
                                {/* Icon */}
                                <div className="absolute left-0 md:left-1/2 ml-1 md:-ml-3 w-6 h-6 rounded-full bg-primary border-4 border-background z-10" />

                                {/* Content */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 text-left"}`}>
                                    <Card className="p-6 hover:bg-white/5 transition-colors group">
                                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{job.role}</h3>
                                        <h4 className="text-lg text-primary font-medium mb-2">{job.company}</h4>
                                        <p className="text-sm text-muted-foreground mb-4 font-mono">{job.duration}</p>
                                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                            {job.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            {job.technologies.map(tech => (
                                                <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-muted-foreground">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
