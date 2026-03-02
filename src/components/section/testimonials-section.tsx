"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-muted/30" id="testimonials">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <BlurFade delay={0.1}>
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Proof of impact from the{" "}
                            <span className="serif-accent text-accent-gradient">
                                trusted network
                            </span>
                        </h2>
                    </div>
                </BlurFade>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {DATA.testimonials.map((testimonial, index) => (
                        <BlurFade key={testimonial.name} delay={0.15 + index * 0.08}>
                            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-5 h-full hover:shadow-lg transition-shadow duration-300">
                                {/* Quote */}
                                <div className="flex-1">
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-2 border-t border-border">
                                    <div
                                        className="size-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                                        style={{
                                            background: `linear-gradient(135deg, ${["#FF6B35", "#10B981", "#3B82F6"][index % 3]
                                                }, ${["#FF8C61", "#34D399", "#60A5FA"][index % 3]
                                                })`,
                                        }}
                                    >
                                        {testimonial.avatar ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            testimonial.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </span>
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
