"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center pt-16"
        >
            {/* Subtle gradient background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,107,53,0.08), transparent)",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
                        <BlurFadeText
                            delay={BLUR_FADE_DELAY}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
                            text={DATA.headline}
                        />
                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <span className="serif-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-accent-gradient">
                                {DATA.headlineAccent}
                            </span>
                        </BlurFade>

                        <BlurFade delay={BLUR_FADE_DELAY * 4}>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
                                Hello, I&apos;m{" "}
                                <span className="text-foreground font-semibold">
                                    {DATA.name.split(" ")[0]} {DATA.name.split(" ")[1]}
                                </span>
                                ,{" "}
                                <span className="text-foreground">{DATA.role}</span>
                            </p>
                        </BlurFade>

                        {/* Social Links */}
                        <BlurFade delay={BLUR_FADE_DELAY * 6}>
                            <div className="flex items-center gap-3 justify-center lg:justify-start mt-2">
                                {Object.entries(DATA.social).map(([key, social]) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={key}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-muted text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:shadow-sm"
                                        >
                                            <IconComponent className="size-4" />
                                            {social.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </BlurFade>
                    </div>

                    {/* Avatar / Visual */}
                    <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex-shrink-0">
                        <div className="relative">
                            <div
                                className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #FFE8DE 0%, #FFECD2 50%, #FF8C61 100%)",
                                }}
                            >
                                {DATA.avatarUrl ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={DATA.avatarUrl}
                                        alt={DATA.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = "none";
                                        }}
                                    />
                                ) : null}
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[var(--coral-light)] -z-10 rotate-12" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-[var(--peach)] -z-10 -rotate-6" />
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
