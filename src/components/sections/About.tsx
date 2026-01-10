
"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Code, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    const highlights = [
        {
            icon: <Code className="w-6 h-6 text-blue-400" />,
            title: "Full-Stack Dev",
            desc: "Building scalable web apps from scratch."
        },
        {
            icon: <Cpu className="w-6 h-6 text-purple-400" />,
            title: "AI Integrations",
            desc: "Leveraging LLMs and ML models in apps."
        },
        {
            icon: <Globe className="w-6 h-6 text-green-400" />,
            title: "Modern UI/UX",
            desc: "Crafting distinct, premium user experiences."
        }
    ];

    return (
        <section id="about" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <SectionHeader title="About Me" subtitle="More than just code." />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            I am a <strong className="text-white font-semibold">Full-Stack Engineer</strong> and <strong className="text-white font-semibold">Product Thinker</strong> who thrives at the intersection of scalable systems and intuitive design. As a Computer Science Engineering student (Batch 2028), I don't just write code—I engineer solutions that solve complex real-world problems.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            With a strong foundation in <strong className="text-white font-semibold">Next.js</strong>, <strong className="text-white font-semibold">Cloud Architecture</strong>, and <strong className="text-white font-semibold">Artificial Intelligence</strong>, I have built production-ready applications that serve actual users. My experience ranges from optimizing database queries for high-volume data to fine-tuning machine learning models for predictive analytics.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            I am driven by a relentless curiosity to master new technologies. Whether it's architecting a microservices backend or crafting pixel-perfect interactions with Framer Motion, I bring a standard of <strong className="text-white font-semibold">excellence</strong>, <strong className="text-white font-semibold">performance</strong>, and <strong className="text-white font-semibold">scalability</strong> to every project I touch.
                        </p>
                    </motion.div>

                    <div className="grid gap-4">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Card className="flex items-center gap-4 p-4 hover:border-primary/30 transition-colors">
                                    <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
