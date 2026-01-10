
"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { achievements } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <SectionHeader title="Achievements" subtitle="Recognition and milestones." center />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card className="h-full p-8 transition-colors hover:bg-white/10 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                                        {idx === 0 ? <Trophy className="w-8 h-8" /> : <Award className="w-8 h-8" />}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-primary text-sm font-medium mb-4">{item.organization}</p>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-muted-foreground">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
