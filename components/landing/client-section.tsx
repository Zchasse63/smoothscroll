"use client";

import { StarIcon } from "lucide-react";

const testimonials = [
  {
    quote: "Smooth Scroll helped us increase our leads by 73% in just two months with their Smart Site solution.",
    author: "Mike Johnson",
    company: "Johnson Roofing",
    rating: 5
  },
  {
    quote: "Their team made the process so easy. Now we have a website that actually brings in business instead of just sitting there.",
    author: "Sarah Williams",
    company: "Williams Plumbing",
    rating: 5
  },
  {
    quote: "The scheduling software they built for us has saved us countless hours and improved our customer satisfaction.",
    author: "David Martinez",
    company: "Martinez Electric",
    rating: 5
  }
];

const clientLogos = [
  { name: "Johnson Roofing", industry: "Roofing" },
  { name: "Williams Plumbing", industry: "Plumbing" },
  { name: "Martinez Electric", industry: "Electrical" },
  { name: "Smith HVAC", industry: "HVAC" },
  { name: "Garcia Landscaping", industry: "Landscaping" }
];

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="py-24 mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Local Businesses
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            We've helped dozens of local service businesses transform their digital presence and grow their customer base.
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="mb-16">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 text-center">
              <h3 className="text-lg font-medium">Our Clients</h3>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {clientLogos.map((client, index) => (
                <li key={index} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                    {client.name.charAt(0)}
                  </div>
                  <span className="mt-2 text-sm font-medium">{client.name}</span>
                  <span className="text-xs text-foreground/70">{client.industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Testimonials */}
        <div>
          <div className="mb-8 text-center">
            <h3 className="text-lg font-medium">What Our Clients Say</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-4 italic text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-foreground/80">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
