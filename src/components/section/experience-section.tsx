"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { BentoCard } from "@/components/motionx/bento-card";
import { Handshake } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ExperienceSection() {
    const exp = DATA.experienceBanner;

    return (
        <section className="py-16 md:py-24" id="experience">
            <div className="max-w-6xl mx-auto px-6">
                <BlurFade delay={0.1}>
                    <div className="flex flex-col gap-12">

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[280px]">
                            {/* Partnership Card */}
                            <BentoCard className="md:col-span-6 flex flex-col justify-between overflow-hidden">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {exp.partnership.avatars.map((avatar, i) => (
                                            <Avatar key={i} className="border-2 border-background size-10">
                                                <AvatarImage src={avatar} />
                                                <AvatarFallback>U{i}</AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-widest text-muted-foreground/50 mb-3 uppercase">
                                        {exp.partnership.tag}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-medium leading-tight max-w-md">
                                        {exp.partnership.title}
                                    </h3>
                                </div>
                                <div className="absolute right-[5%] top-[5%] text-foreground/5 -rotate-12 pointer-events-none">
                                    <Handshake className="size-32" />
                                </div>
                            </BentoCard>

                            {/* Tech Stack Card */}
                            <BentoCard className="md:col-span-6 flex flex-col justify-between">
                                <h3 className="text-2xl md:text-3xl font-medium leading-tight max-w-[300px]">
                                    {exp.techStack.title} <span className="italic text-[#FF6B35] font-serif">{exp.techStack.titleAccent}</span>
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.items.map((tech) => {
                                        const Icon = Icons[tech.icon as keyof typeof Icons];
                                        return (
                                            <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-background/50 text-xs font-medium hover:bg-background/80 transition-colors">
                                                {Icon ? (
                                                    <Icon className="size-3.5" />
                                                ) : (
                                                    <div className="size-3 rounded-full bg-primary/20" />
                                                )}
                                                {tech.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </BentoCard>

                            {/* Adaptability Card */}
                            <BentoCard className="md:col-span-4 flex flex-col justify-between overflow-hidden">
                                <div>
                                    <h4 className="text-lg font-medium leading-snug">
                                        {exp.adaptability.title} <span className="italic text-[#FF6B35] font-serif">{exp.adaptability.titleAccent}</span>
                                    </h4>
                                    <div className="flex gap-2 mt-4">
                                        {exp.adaptability.timezones.map(tz => (
                                            <span key={tz} className="size-8 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                                                {tz}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                                        {exp.adaptability.location}
                                    </div>
                                </div>
                            </BentoCard>

                            {/* Project/Featured Card */}
                            <BentoCard className="md:col-span-8 flex flex-col items-center justify-center bg-muted/20">
                                <div className="w-full max-w-[340px] bg-card border border-border/50 rounded-xl overflow-hidden shadow-2xl aspect-[1.7/1] flex flex-col relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="h-7 bg-muted/80 border-b border-border/50 flex items-center gap-1.5 px-3">
                                        <div className="size-2 rounded-full bg-rose-500/60" />
                                        <div className="size-2 rounded-full bg-amber-500/60" />
                                        <div className="size-2 rounded-full bg-emerald-500/60" />
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                                        <p className="text-[10px] font-bold tracking-widest text-muted-foreground/50 mb-3 uppercase">
                                            {exp.project.tag}
                                        </p>
                                        <h4 className="text-xl font-medium leading-tight mb-6">
                                            {exp.project.title} <span className="italic text-[#FF6B35] font-serif">{exp.project.titleAccent}</span>
                                        </h4>
                                        <Button size="sm" className="rounded-md px-8 h-8 text-xs font-bold uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 transition-all shadow-md">
                                            Start
                                        </Button>
                                    </div>
                                </div>
                            </BentoCard>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
