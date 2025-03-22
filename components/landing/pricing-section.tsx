"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRightIcon, Loader } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};
const smartSitesPlans = [
  {
    id: "price_1",
    name: "Starter",
    description: "Perfect for small local businesses just getting started",
    features: [
      "AI-powered landing page",
      "Mobile optimization",
      "Basic lead capture",
      "Standard support",
      "Monthly performance report",
    ],
    monthlyPrice: 9900,
    yearlyPrice: 99000,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Growth",
    description: "For businesses ready to accelerate their online presence",
    features: [
      "Advanced AI landing page",
      "Lead qualification system",
      "Customer journey tracking",
      "Priority support",
      "Weekly performance reports",
      "A/B testing",
    ],
    monthlyPrice: 19900,
    yearlyPrice: 199000,
    isMostPopular: true,
  },
  {
    id: "price_3",
    name: "Premium",
    description: "Comprehensive solution for established local businesses",
    features: [
      "Multi-page AI website",
      "Advanced lead nurturing",
      "Customer relationship management",
      "Priority support with dedicated manager",
      "Real-time analytics dashboard",
      "Conversion optimization",
      "Content updates included",
    ],
    monthlyPrice: 29900,
    yearlyPrice: 299000,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Transparent Pricing, Exceptional Value
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choose the right plan for your business needs with no hidden fees or long-term contracts.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2 mb-12">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span>Annual Billing</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            Save 20% ✨
          </span>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center">Smart Sites</h3>
          <div className="mx-auto grid w-full justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {smartSitesPlans.map((price, idx) => (
              <div
                key={price.id}
                className={cn(
                  "relative flex flex-col gap-6 rounded-xl border p-6 bg-card shadow-sm overflow-hidden",
                  {
                    "border-primary ring-2 ring-primary/20":
                      price.isMostPopular,
                  }
                )}
              >
                {price.isMostPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-xl font-bold">
                    {price.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {price.description}
                  </p>
                </div>

                <motion.div
                  key={`${price.id}-${interval}`}
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 12,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + idx * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex flex-row items-baseline gap-1"
                >
                  <span className="text-4xl font-bold">
                    ${interval === "year"
                      ? toHumanPrice(price.yearlyPrice / 12, 0)
                      : toHumanPrice(price.monthlyPrice, 0)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </motion.div>
                
                {interval === "year" && (
                  <p className="text-xs text-muted-foreground -mt-2">Billed annually (${toHumanPrice(price.yearlyPrice, 0)})</p>
                )}

                <hr className="my-4 h-px w-full border-none bg-border" />
                
                {price.features && price.features.length > 0 && (
                  <ul className="flex flex-col gap-3 mb-6">
                    {price.features.map((feature: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckIcon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <Button
                  className="w-full rounded-full"
                  variant={price.isMostPopular ? "default" : "outline"}
                  disabled={isLoading}
                  onClick={() => void onSubscribeClick(price.id)}
                >
                  {(!isLoading || (isLoading && id !== price.id)) && (
                    <span>Get Started</span>
                  )}
                  {isLoading && id === price.id && <span>Processing</span>}
                  {isLoading && id === price.id && (
                    <Loader className="ml-2 h-4 w-4 animate-spin" />
                  )}
                </Button>

              </div>
            ))}
          </div>
        </div>
        
        <div className="rounded-xl border bg-card p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">SaaS Solutions</h3>
              <p className="mb-6 text-muted-foreground">
                Our custom SaaS solutions are tailored to your specific business needs. Contact us for a personalized quote and consultation.
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckIcon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Scheduling and appointment management</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckIcon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Customer relationship management (CRM)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckIcon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Inventory and service tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckIcon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>Custom reporting and analytics</span>
                </li>
              </ul>
              <Button asChild className="rounded-full">
                <Link href="#contact">
                  Request Custom Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 border">
              <h4 className="text-lg font-medium mb-4">Why Custom SaaS?</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">1</div>
                  <div>
                    <h5 className="font-medium">Tailored to Your Workflow</h5>
                    <p className="text-sm text-muted-foreground">Built specifically for how your business operates</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</div>
                  <div>
                    <h5 className="font-medium">Scalable Growth</h5>
                    <p className="text-sm text-muted-foreground">Expands as your business needs evolve</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</div>
                  <div>
                    <h5 className="font-medium">Competitive Advantage</h5>
                    <p className="text-sm text-muted-foreground">Gain an edge with technology built for your specific industry</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
