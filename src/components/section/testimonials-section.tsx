"use client";

import BlurFade from "@/components/motionx/blur-fade";
import Marquee from "@/components/motionx/marquee";
import { DATA } from "@/data/resume";

export default function TestimonialsSection() {
    const testimonials = DATA.testimonials;

    return (
        <section className="py-16 md:py-24" id="testimonials">
            <div className="max-w-4xl mx-auto px-4 sm:px-0 mb-12">
                {/* Section Header */}
                <BlurFade delay={0.1}>
                    <div className="text-left">
                        <h2 className="text-base uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                            Trusted{" "}
                            <span className="serif-accent text-accent-gradient text-base tracking-normal">
                                Network
                            </span>
                        </h2>
                    </div>
                </BlurFade>
            </div>

            <div className="relative max-w-4xl mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover repeat={6} className="[--duration:30s] [--gap:1rem]">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </Marquee>

                {/* Side Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
}

function TestimonialCard({
    img,
    name,
    role,
    quote,
    avatar,
}: {
    img?: string;
    name: string;
    role: string;
    quote: string;
    avatar?: string;
}) {
    return (
        <div className="relative flex w-80 flex-col gap-4 overflow-hidden rounded-2xl border border-border/50 bg-card p-6 md:p-8 hover:bg-accent/5 transition-colors duration-300">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
                &ldquo;{quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
                <div className="size-9 rounded-full overflow-hidden bg-muted flex items-center justify-center text-xs font-bold ring-1 ring-border/50">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        name.split(" ").map((n) => n[0]).join("")
                    )}
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-tight">{name}</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-black">{role}</span>
                </div>
            </div>
        </div>
    );
}
