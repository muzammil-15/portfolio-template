"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowRight, Mail } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden"
        >
            {/* Soft subtle gradient background centered */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(circle 800px at 50% 50%, rgba(255,107,53,0.06), rgba(59,130,246,0.02), transparent)",
                }}
            />

            <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">


                {/* Main Headline */}
                <div className="flex flex-col items-center justify-center mb-8 max-w-5xl">
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1] text-neutral-900 dark:text-white pb-3">
                            {DATA.headline}
                        </h1>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <span className="serif-accent text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-light tracking-normal leading-[1.1] text-neutral-500/80 dark:text-neutral-400">
                            {DATA.headlineAccent}
                        </span>
                    </BlurFade>
                </div>

                {/* Sub-headline */}
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 mb-6 sm:mb-12">
                        <span>Hello, I&apos;m <strong className="text-neutral-800 dark:text-white font-semibold">{DATA.name}</strong></span>
                        <span className="h-1 hidden sm:block w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                        <span className="px-3 py-1 bg-red-50 text-[#FF6B35] dark:bg-red-500/10 rounded-full text-base font-medium">
                            {DATA.role}
                        </span>
                    </div>
                </BlurFade>

                {/* CTAs */}
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex w-full sm:w-auto items-center gap-2 px-6 py-3 rounded-full bg-[#0F1117] text-white font-medium hover:bg-black transition-all active:scale-95 dark:bg-white dark:text-[#0F1117] dark:hover:bg-neutral-200"
                        >
                            Let&apos;s Connect
                            <span className="flex items-center justify-center bg-white/10 dark:bg-black/10 rounded-full h-6 w-6 ml-1">
                                <ArrowRight className="h-4 w-4 text-white/80 dark:text-black/80" />
                            </span>
                        </a>

                        <a
                            href={`mailto:${DATA.contact?.email || 'hello@motionx.design'}`}
                            className="inline-flex items-center gap-2.5 text-neutral-500 font-medium hover:text-neutral-900 transition-colors dark:text-neutral-400 dark:hover:text-white"
                        >
                            <Mail className="h-5 w-5" />
                            {DATA.contact?.email || 'hello@motionx.design'}
                        </a>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
