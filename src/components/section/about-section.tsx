"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { DATA } from "@/data/resume";

export default function AboutSection() {
    return (
        <section className="py-16 md:py-24" id="about">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <BlurFade delay={0.1}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
                                {DATA.about.headline}{" "}
                                <span className="serif-accent text-accent-gradient">
                                    {DATA.about.headlineAccent}
                                </span>
                            </h2>
                        </BlurFade>

                        <BlurFade delay={0.15}>
                            <div className="flex flex-col gap-4 mt-4">
                                {DATA.about.bio.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-muted-foreground text-base md:text-lg leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </BlurFade>
                    </div>

                    {/* Image */}
                    <BlurFade delay={0.2} className="flex-shrink-0">
                        <div className="relative">
                            <div
                                className="w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #F5F5F5 0%, #E5E5E5 100%)",
                                }}
                            >
                                {DATA.about.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={DATA.about.image}
                                        alt={DATA.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-4xl font-bold text-muted-foreground/20">
                                            {DATA.initials}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Decorative */}
                            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-border/40 -z-10" />
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
