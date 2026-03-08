"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export default function CtaSection() {
    return (
        <section className="py-8 md:py-16" id="contact">
            <div className="max-w-4xl mx-auto px-4 lg:px-0">
                <BlurFade delay={0.15}>
                    {/* Main CTA */}
                    <div className="relative rounded-2xl overflow-hidden p-8 md:p-14 lg:p-20 bg-neutral-100 dark:bg-neutral-950 border border-black/5 dark:border-white/5 shadow-sm transition-colors duration-300">
                        {/* Mesh Gradients / Orbs */}
                        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[120px] opacity-20 dark:opacity-30 pointer-events-none bg-linear-to-br from-[#FF6B35] to-[#FF8C61]" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[50%] rounded-full blur-[100px] opacity-10 dark:opacity-20 pointer-events-none bg-[#FF8C61]" />

                        {/* Grain/Noise Texture overlay */}
                        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                        <div className="relative z-10 flex flex-col gap-8 items-start">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl text-neutral-900 dark:text-white">
                                {DATA.contact.cta}{" "}
                                <br className="hidden md:block"/>
                                <span className="serif-accent text-accent-gradient">
                                    {DATA.contact.ctaAccent}
                                </span>
                            </h2>

                            <a
                                href={`mailto:${DATA.contact.email}`}
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white dark:text-neutral-950 bg-neutral-900 dark:bg-white hover:bg-black dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/10 dark:shadow-white/10"
                            >
                                <Icons.email className="size-5 transition-transform group-hover:rotate-12" />
                                Get in touch
                            </a>
                        </div>
                    </div>
                </BlurFade>

                {/* Footer */}
                <BlurFade delay={0.2}>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">

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
