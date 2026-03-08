"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/motionx/blur-fade";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center gap-8">
                <BlurFade delay={0.1}>
                    <div className="relative inline-block">
                        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-foreground/5 opacity-20 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                            404
                        </h1>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight relative z-10 leading-tight">
                            Page Not{" "}
                            <span className="serif-accent text-accent-gradient">
                                Found
                            </span>
                        </h2>
                    </div>
                </BlurFade>

                <BlurFade delay={0.2}>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved to a new universe. Let&apos;s get you back on track.
                    </p>
                </BlurFade>

                <BlurFade delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link href="/">
                            <Button className="rounded-full px-8 py-6 gap-2 text-base font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10">
                                <Home className="h-5 w-5" />
                                Return Home
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="rounded-full px-8 py-6 gap-2 text-base font-medium transition-all hover:bg-muted/50 border-border/50"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Go Back
                        </Button>
                    </div>
                </BlurFade>
            </div>
        </div>
    );
}


