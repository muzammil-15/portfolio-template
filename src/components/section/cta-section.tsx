"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export default function CtaSection() {
    return (
        <section className="py-16 md:py-24" id="contact">
            <div className="max-w-4xl mx-auto">

                <BlurFade delay={0.15}>
                    {/* Main CTA */}
                    <div className="relative rounded-3xl overflow-hidden p-8 md:p-14 lg:p-20"
                        style={{
                            background: "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)",
                        }}
                    >
                        {/* Decorative gradient orb */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                            style={{
                                background: "linear-gradient(135deg, #FF6B35, #FF8C61)",
                            }}
                        />

                        <div className="relative z-10 flex flex-col gap-6 items-start">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl">
                                {DATA.contact.cta}
                            </h2>

                            <a
                                href={`mailto:${DATA.contact.email}`}
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-foreground bg-white hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl mt-4"
                            >
                                <Icons.email className="size-5" />
                                Get in touch
                            </a>

                            <p className="text-white/40 text-sm mt-4">
                                {DATA.contact.email}
                            </p>
                        </div>
                    </div>
                </BlurFade>

                {/* Footer */}
                <BlurFade delay={0.2}>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
                        <div className="flex items-center gap-2">
                            <Icons.logo className="size-7 text-foreground" />
                            <span className="text-sm font-semibold">{DATA.name}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            {Object.entries(DATA.social).map(([key, social]) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={key}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="size-5" />
                                    </a>
                                );
                            })}
                        </div>

                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
                        </p>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
