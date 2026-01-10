
"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { personalData, skills } from "@/lib/data";
import { motion } from "framer-motion";

export function Skills() {
    const categories = [
        { label: "Languages", data: skills.languages, color: "bg-blue-500" },
        { label: "Frameworks", data: skills.frameworks, color: "bg-purple-500" },
        { label: "Databases", data: skills.databases, color: "bg-green-500" },
        { label: "Tools", data: skills.tools, color: "bg-orange-500" },
        { label: "AI / ML", data: skills.ai, color: "bg-indigo-500" },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <SectionHeader title="Technical Arsenal" subtitle="The tools I use to bring ideas to life." center />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className={`w-2 h-8 rounded-full ${category.color}`} />
                                {category.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.data.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
