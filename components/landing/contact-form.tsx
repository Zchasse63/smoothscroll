'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircle2Icon, SendIcon, AlertCircleIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Define industry options
const industries = [
  { value: "retail", label: "Retail" },
  { value: "restaurant", label: "Restaurant" },
  { value: "construction", label: "Construction" },
  { value: "professional_services", label: "Professional Services" },
  { value: "healthcare", label: "Healthcare" },
  { value: "real_estate", label: "Real Estate" },
  { value: "automotive", label: "Automotive" },
  { value: "other", label: "Other" },
];

// Server action simulation
async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // This would be a real API call in production
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // In production, this would send data to your backend
      console.log("Form submission:", data);
      resolve({ success: true, message: "Form submitted successfully" });
      // For error testing: resolve({ success: false, message: "Server error occurred" });
    }, 1000);
  });
}

// Define form schema with proper types
export interface ContactFormData {
  name: string;
  business: string;
  email: string;
  phone?: string;
  industry: string;
  message?: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  business: z.string().min(2, { message: "Business name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  industry: z.string().min(2, { message: "Please select your industry." }),
  message: z.string().optional(),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  // Refs for focus management
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const resetButtonRef = useRef<HTMLButtonElement>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      business: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
    },
  });

  // After successful submission, focus the reset button
  useEffect(() => {
    if (submitted && resetButtonRef.current) {
      resetButtonRef.current.focus();
    }
  }, [submitted]);

  // After form reset, focus the submit button
  const handleReset = () => {
    setSubmitted(false);
    setFormError(null);
    
    // Give time for the form to render before focusing
    setTimeout(() => {
      if (submitButtonRef.current) {
        submitButtonRef.current.focus();
      }
    }, 100);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      setFormError(null);
      
      // Submit form data
      const result = await submitContactForm(values);
      
      if (result.success) {
        setSubmitted(true);
        toast.success("Thanks for contacting us! We'll be in touch soon.", {
          duration: 5000,
          id: "contact-form-success"
        });
        form.reset();
      } else {
        setFormError(result.message);
        toast.error(`Submission failed: ${result.message}`, {
          duration: 5000,
          id: "contact-form-error"
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("An unexpected error occurred. Please try again.");
      toast.error("Something went wrong. Please try again.", {
        duration: 5000,
        id: "contact-form-error"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Show success view after submission
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm p-8 sm:p-12 rounded-xl border border-primary/20 shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
          role="status"
          aria-live="polite"
        >
          <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2Icon className="text-primary h-8 w-8" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Thanks for Reaching Out!</h2>
          <p className="text-foreground/90 mb-8">
            We've received your information and will contact you shortly to discuss how we can help transform your business.
          </p>
          <Button 
            ref={resetButtonRef}
            onClick={handleReset} 
            variant="outline"
            className="px-8 py-6 rounded-full"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm p-8 sm:p-12 rounded-xl border border-primary/20 shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="region"
        aria-labelledby="contact-form-heading"
      >
        <div className="text-center mb-10">
          <h2 id="contact-form-heading" className="text-3xl font-bold mb-4">Let's Transform Your Business</h2>
          <p className="text-foreground/90 max-w-xl mx-auto">
            Fill out the form below to schedule a free consultation and discover how our solutions can help your business thrive.
          </p>
        </div>
        
        {formError && (
          <div className="mb-6 p-4 border border-red-300 bg-red-50 dark:bg-red-950/20 dark:border-red-900 rounded-lg flex items-start gap-3" role="alert">
            <AlertCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-medium text-red-800 dark:text-red-300">There was a problem with your submission</h3>
              <p className="text-red-700 dark:text-red-400 text-sm mt-1">{formError}</p>
            </div>
          </div>
        )}
        
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-6"
            noValidate
            aria-label="Contact information form"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Smith" 
                        {...field} 
                        className="rounded-lg py-6 border-border" 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Business Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Business" 
                        {...field} 
                        className="rounded-lg py-6 border-border" 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="you@example.com" 
                        type="email" 
                        {...field} 
                        className="rounded-lg py-6 border-border"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="(555) 123-4567" 
                        type="tel" 
                        {...field} 
                        className="rounded-lg py-6 border-border"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Industry</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isSubmitting}
                  >
                    <FormControl>
                      <SelectTrigger className="rounded-lg h-14 border-border">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us more about your needs..." 
                      {...field} 
                      className="min-h-32 rounded-lg p-4 border-border resize-none"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              ref={submitButtonRef}
              type="submit" 
              className="w-full py-6 mt-4 rounded-full text-base font-medium group"
              disabled={isSubmitting}
              aria-live="polite"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <SendIcon className="h-5 w-5 mr-2 animate-pulse" aria-hidden="true" />
                  <span>Sending...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <span>Schedule a Free Consultation</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" aria-hidden="true" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
