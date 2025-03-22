"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Smooth Scroll different from other scrolling libraries?",
    answer: "Smooth Scroll combines performance optimization with beautiful animations to create a premium user experience. Unlike other libraries, we focus on accessibility, mobile optimization, and customization options that don't compromise site performance."
  },
  {
    question: "Is Smooth Scroll compatible with all browsers?",
    answer: "Yes, Smooth Scroll is designed to work across all modern browsers including Chrome, Firefox, Safari, and Edge. We also include fallbacks for older browsers to ensure a consistent experience for all users."
  },
  {
    question: "Will Smooth Scroll slow down my website?",
    answer: "No, Smooth Scroll is built with performance in mind. We use hardware-accelerated animations and efficient code to ensure minimal impact on your site's performance. Our library is also designed to lazy-load components to further optimize performance."
  },
  {
    question: "How customizable are the scroll animations?",
    answer: "Extremely customizable! You can adjust animation duration, easing functions, trigger points, and visual effects. Our API provides simple ways to create custom animations that match your brand's unique style."
  },
  {
    question: "Is Smooth Scroll accessible?",
    answer: "Absolutely. We've built Smooth Scroll with accessibility as a priority. All animations respect the user's reduced motion preferences, and we ensure that screen readers and keyboard navigation work seamlessly with our components."
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, all paid plans include technical support. Our team is available to help with implementation questions, customization needs, and troubleshooting any issues you might encounter."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about Smooth Scroll
          </p>
        </motion.div>
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
