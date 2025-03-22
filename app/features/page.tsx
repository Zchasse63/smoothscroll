"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"

export default function FeaturesPage() {
  const features = [
    {
      title: "Smooth Animations",
      description: "Experience buttery-smooth scrolling animations that enhance user engagement and create a premium feel for your website.",
      icon: "✨",
    },
    {
      title: "Customizable Effects",
      description: "Choose from a variety of scroll effects and customize them to match your brand's unique style and personality.",
      icon: "🎨",
    },
    {
      title: "Mobile Optimized",
      description: "All animations are carefully optimized for mobile devices, ensuring a consistent experience across all platforms.",
      icon: "📱",
    },
    {
      title: "Performance Focused",
      description: "Built with performance in mind, our scroll effects won't slow down your website or impact your SEO rankings.",
      icon: "⚡",
    },
    {
      title: "Easy Integration",
      description: "Simple API and comprehensive documentation make it easy to integrate Smooth Scroll into any project.",
      icon: "🔌",
    },
    {
      title: "Accessibility First",
      description: "All animations respect user preferences including reduced motion settings for those with vestibular disorders.",
      icon: "♿",
    },
  ]

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 pt-24">
          <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-[58rem] text-center">
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Features that make your website stand out
              </motion.h1>
              <motion.p 
                className="mt-4 text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover how Smooth Scroll can transform your user experience with these powerful features.
              </motion.p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-background rounded-lg border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
          
          <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="mx-auto max-w-[58rem] text-center">
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to enhance your website?
              </motion.h2>
              <motion.p 
                className="mt-4 text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Get started with Smooth Scroll today and see the difference.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a
                  href="/signup"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                </a>
                <a
                  href="/#faq"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
