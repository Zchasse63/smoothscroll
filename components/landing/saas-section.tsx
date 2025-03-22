"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon, BarChart3Icon, ClockIcon, UsersIcon } from "lucide-react";

export default function SaasSection() {
  return (
    <section id="saas" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              SaaS Solutions for Local Businesses
            </h2>
            <p className="mb-6 text-foreground/90 text-lg">
              Powerful software that helps you compete and grow in today&apos;s market.
            </p>
            <p className="mb-8 text-foreground/80">
              Our custom SaaS solutions help local businesses streamline operations, improve customer service, and boost revenue. From scheduling to customer management, we&apos;ve got you covered.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2">
                <ClockIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">Scheduling</h3>
                  <p className="text-sm text-foreground/80">Automated booking system</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <UsersIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">Customer Management</h3>
                  <p className="text-sm text-foreground/80">Track and nurture relationships</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3Icon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">Analytics</h3>
                  <p className="text-sm text-foreground/80">Data-driven insights</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRightIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">Automation</h3>
                  <p className="text-sm text-foreground/80">Streamline workflows</p>
                </div>
              </div>
            </div>
            
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#contact">
                Explore SaaS Solutions
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Custom Solutions</h3>
                  <p className="text-foreground/80 mb-4">
                    Tailored to your specific business needs and challenges.
                  </p>
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-foreground">
                    Contact for Custom Pricing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
