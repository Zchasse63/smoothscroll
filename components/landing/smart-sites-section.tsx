"use client";

import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    title: "Automated Lead Generation",
    description: "Capture and qualify leads automatically, sending only the best prospects to your inbox."
  },
  {
    title: "AI-Enhanced Sales Funnels",
    description: "Guide potential customers through a personalized journey that addresses their specific needs."
  },
  {
    title: "Mobile Optimization",
    description: "Reach customers wherever they are with perfectly responsive designs that look great on any device."
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance, understand your audience, and make data-driven decisions to improve results."
  }
];

export default function SmartSitesSection() {
  return (
    <section id="smart-sites" className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Smart Sites: Your 24/7 Sales Team
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            AI-powered landing pages that convert visitors into customers while you sleep.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckIcon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-medium text-foreground">{feature.title}</h3>
              <p className="text-sm text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
        

        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="#contact">See Smart Sites in Action</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
