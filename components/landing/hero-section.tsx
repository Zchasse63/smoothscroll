"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-primary/20 bg-primary/5 px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-primary/10 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>✨ Your Partner in the AI Revolution</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      <h1 className="bg-gradient-to-br from-primary from-30% to-primary/40 bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Smart Solutions for
        <br className="hidden md:block" /> Local Businesses
      </h1>
      <p className="mb-12 text-lg tracking-tight text-foreground/90 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        We guide local businesses through the digital landscape with smart solutions,
        <br className="hidden md:block" /> genuine service, and a touch of fun.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg" className="translate-y-[-1rem] animate-fade-in gap-1 rounded-full text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
          <Link href="#contact">
            <span>Transform Your Business</span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="translate-y-[-1rem] animate-fade-in gap-1 rounded-full opacity-0 ease-in-out [--animation-delay:700ms]">
          <Link href="#how-it-works">
            <span>Learn How It Works</span>
          </Link>
        </Button>
      </div>
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px]" 
      >
        <div
          className={`rounded-xl border border-primary/10 bg-background/80 dark:bg-background/80 backdrop-blur-sm before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary) / 0.5)"
          />

          <div className="relative w-full h-full rounded-[inherit] border p-8 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-6 rounded-xl bg-card/95 backdrop-blur-sm border-border border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">Smart Sites</h3>
                <p className="text-sm text-muted-foreground text-center">AI-powered landing pages that convert visitors into customers</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-card/95 backdrop-blur-sm border-border border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">SaaS Solutions</h3>
                <p className="text-sm text-muted-foreground text-center">Custom software that helps local businesses compete and grow</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-card/95 backdrop-blur-sm border-border border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground text-center">Professional advice to navigate the digital landscape</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
