"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export default function ExperienceSection() {
    return (
        <section className="py-16 md:py-24" id="experience">
            <div className="max-w-6xl mx-auto px-6">
                <BlurFade delay={0.1}>
                    <div className="flex flex-col gap-8">
                        {/* Tagline */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <Icons.logo className="size-8 text-foreground" />
                                <div className="h-px w-12 bg-border" />
                            </div>
                            <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                                {DATA.experienceBanner.tagline}
                            </p>
                        </div>

                        {/* Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* CTA Card */}
                            <div className="rounded-2xl bg-foreground text-background p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icons.logo className="size-6 text-background" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {DATA.experienceBanner.ctaTitle}
                                        </h3>
                                        <p className="text-sm text-background/60">
                                            {DATA.experienceBanner.ctaSubtitle}
                                        </p>
                                    </div>
                                    <a
                                        href="/#contact"
                                        className="flex items-center justify-center size-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                                    >
                                        <Icons.arrowRight className="size-5 text-background" />
                                    </a>
                                </div>
                            </div>

                            {/* Stats Card */}
                            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-center">
                                <p className="text-sm text-muted-foreground mb-4">
                                    {DATA.experienceBanner.stats}
                                </p>
                                <div className="flex items-center gap-4 flex-wrap">
                                    {DATA.experienceBanner.companies.map((company) => (
                                        <div
                                            key={company.name}
                                            className="flex items-center justify-center px-3 py-1.5 rounded-lg bg-muted text-xs font-medium text-muted-foreground"
                                        >
                                            {company.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
