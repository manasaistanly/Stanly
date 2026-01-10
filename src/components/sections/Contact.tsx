
"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/data";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <SectionHeader title="Get in Touch" subtitle="Let's build something amazing together." center />

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold">Connect with me</h3>
                        <p className="text-muted-foreground text-lg">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <a href={`mailto:${personalData.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium">{personalData.email}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium">{personalData.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="Gmail"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                    placeholder="Hi, I'd like to talk about..."
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                                <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
