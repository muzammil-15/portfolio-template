"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function VenturesSection() {
    return (
        <section className="py-16 md:py-24" id="projects">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <BlurFade delay={0.1}>
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                            Venture{" "}
                            <span className="serif-accent text-accent-gradient text-base tracking-normal">
                                Showcase
                            </span>
                        </h2>
                    </div>
                </BlurFade>

                {/* Venture Cards */}
                <div className="flex flex-col gap-20">
                    {DATA.ventures.map((venture, index) => (
                        <BlurFade key={venture.title} delay={0.1 + index * 0.1}>
                            <div
                                className={`flex flex-col gap-8 ${venture.position === "right"
                                    ? "lg:flex-row-reverse"
                                    : "lg:flex-row"
                                    } items-stretch`}
                            >
                                {/* Image */}
                                <div className="flex-1 min-h-[300px] lg:min-h-[400px]">
                                    <div
                                        className="w-full h-full rounded-2xl overflow-hidden shadow-xl relative group"
                                        style={{
                                            background: `linear-gradient(135deg, ${venture.color}15, ${venture.color}30)`,
                                        }}
                                    >
                                        {venture.image ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={venture.image}
                                                alt={venture.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div
                                                    className="text-6xl font-bold opacity-20"
                                                    style={{ color: venture.color }}
                                                >
                                                    {venture.title}
                                                </div>
                                            </div>
                                        )}
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-center gap-6 lg:px-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ background: venture.color }}
                                        />
                                        <h3 className="text-2xl md:text-3xl font-bold">
                                            {venture.title}
                                        </h3>
                                    </div>

                                    <p className="text-base md:text-lg font-medium leading-relaxed">
                                        {venture.subtitle}
                                    </p>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {venture.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {venture.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border border-border text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-6 pt-2">
                                        {Object.entries(venture.stats).map(([key, value]) => (
                                            <div key={key} className="flex flex-col">
                                                <span className="text-xl font-bold">{value}</span>
                                                <span className="text-xs text-muted-foreground capitalize">
                                                    {key}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href={venture.href}
                                        className="inline-flex items-center gap-2 text-sm font-semibold group/link mt-2 w-fit"
                                        style={{ color: venture.color }}
                                    >
                                        View Case Study
                                        <ArrowUpRight className="size-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
