"use client";

import { SearchIcon, LayoutIcon, RocketIcon, TrendingUpIcon } from "lucide-react";

const steps = [
  {
    icon: SearchIcon,
    title: "Discovery",
    description: "We learn about your business, goals, and challenges."
  },
  {
    icon: LayoutIcon,
    title: "Strategy",
    description: "We create a custom plan tailored to your specific needs."
  },
  {
    icon: RocketIcon,
    title: "Implementation",
    description: "We build and launch your Smart Site or SaaS solution."
  },
  {
    icon: TrendingUpIcon,
    title: "Growth",
    description: "We continuously optimize for better results and support your success."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple Process, Powerful Results
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            We guide you through every step of the journey to digital transformation.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border hidden md:block" />
          
          <div className="grid gap-12 md:gap-0">
            {steps.map((step, index) => (
              <div key={index} className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                {/* Step content */}
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 md:mx-auto">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-foreground">{step.title}</h3>
                  <p className="text-foreground/80">{step.description}</p>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`} />
                
                {/* Dot on the timeline */}
                <div className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
