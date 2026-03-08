"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function VenturesSection() {
    return (
        <section className="py-8 md:py-16" id="work">
            <div className="max-w-4xl mx-auto px-4 lg:px-0">
                {/* Section Header */}
                <BlurFade delay={0.1}>
                    <div className="text-left mb-16">
                        <h2 className="text-base uppercase tracking-widest text-muted-foreground mb-3">
                            Venture{" "}
                            <span className="serif-accent text-accent-gradient text-base tracking-normal">
                                Showcase
                            </span>
                        </h2>
                    </div>
                </BlurFade>

                {/* Venture Cards */}
                <div className="flex flex-col gap-8">
                    {DATA.ventures.map((venture, index) => (
                        <BlurFade key={venture.title} delay={0.1 + index * 0.1}>
                            <div className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-border transition-colors duration-500">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image Section */}
                                    <div className="relative w-full lg:w-[48%] h-[240px] md:h-[300px] lg:h-auto overflow-hidden bg-muted/30 p-4 md:p-6 group/img">
                                        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl border border-border/10 bg-background">

                                            {venture.image && (
                                                <img
                                                    src={venture.image}
                                                    alt={venture.title}
                                                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-110"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 p-6 md:p-10 flex flex-col gap-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold tracking-tight mb-1">
                                                    {venture.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground font-medium">
                                                    Jan 2024 - Feb 2024
                                                </p>
                                            </div>
                                            <Link href={venture.href}>
                                                <ArrowUpRight className="size-6 text-muted-foreground hover:text-foreground transition-colors" />
                                            </Link>
                                        </div>

                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2">
                                            {venture.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                                            {venture.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-tight border border-border/50 bg-muted/30 text-foreground/80"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
