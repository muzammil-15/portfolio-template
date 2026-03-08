"use client";

import BlurFade from "@/components/motionx/blur-fade";
import { DATA } from "@/data/resume";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ExperienceSection() {
    return (
        <section className="py-8 md:py-16" id="experience">
            <div className="max-w-4xl mx-auto px-4 lg:px-0">
                <BlurFade delay={0.1}>
                    <div className="text-left mb-12">
                        <h2 className="text-base uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                            Professional{" "}
                            <span className="serif-accent text-accent-gradient text-base tracking-normal">
                                Path
                            </span>
                        </h2>
                    </div>
                </BlurFade>

                <BlurFade delay={0.2}>
                    <Tabs defaultValue="work" className="w-full">
                        <TabsList className="bg-muted/50 p-1 rounded-xl mb-10 w-fit">
                            <TabsTrigger value="work" className="rounded-xl px-6 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground transition-all duration-300 flex items-center gap-2">
                                <Briefcase className="size-4" />
                                <span>Work</span>
                            </TabsTrigger>
                            <TabsTrigger value="education" className="rounded-xl px-6 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground transition-all duration-300 flex items-center gap-2">
                                <GraduationCap className="size-4" />
                                <span>Education</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="work" className="mt-0">
                            <div className="flex flex-col gap-2">
                                {DATA.work.map((item, index) => (
                                    <ExperienceItem
                                        key={item.company + index}
                                        {...item}
                                        type="work"
                                        delay={0.1 + index * 0.05}
                                    />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="mt-0">
                            <div className="flex flex-col gap-2">
                                {DATA.education.map((item, index) => (
                                    <ExperienceItem
                                        key={item.school + index}
                                        {...item}
                                        type="education"
                                        delay={0.1 + index * 0.05}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </BlurFade>
            </div>
        </section>
    );
}

function ExperienceItem({
    company,
    school,
    title,
    degree,
    logo,
    start,
    end,
    description,
    delay
}: any) {
    const mainTitle = company || school;
    const subTitle = title || degree;

    return (
        <BlurFade delay={delay}>
            <div className="group relative flex flex-col sm:flex-row items-start sm:items-center py-4 sm:py-6 px-4 rounded-2xl border border-border/30 hover:border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-500 gap-2 sm:gap-4">
                {/* Dates */}
                <div className="sm:w-32 shrink-0 text-sm font-medium text-muted-foreground/60">
                    {start} — {end}
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center gap-4">
                    <div className="size-10 rounded-full bg-muted flex items-center justify-center border border-border/50 overflow-hidden font-bold text-[10px] uppercase">
                       <Image src={logo} alt={company || school} width={40} height={40} />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {subTitle} <span className="text-muted-foreground/40 font-normal">at</span> {mainTitle}
                        </h4>
                        {description && (
                            <p className="text-sm text-muted-foreground/80 line-clamp-1 mt-0.5 max-w-lg">
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                {/* Action Icon */}
                <div className="hidden sm:flex items-center justify-center size-8 rounded-full border border-border/40 text-muted-foreground/20 group-hover:text-foreground group-hover:border-border transition-all">
                    <ChevronRight className="size-4" />
                </div>
            </div>
        </BlurFade>
    );
}
