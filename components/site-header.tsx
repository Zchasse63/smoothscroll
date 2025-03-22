"use client";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const menuItem = [
  {
    id: 1,
    label: "Features",
    href: "/features",
  },
  {
    id: 2,
    label: "Pricing",
    href: "/#pricing",
  },
  {
    id: 3,
    label: "FAQ",
    href: "/#faq",
  },
  {
    id: 4,
    label: "Contact Us",
    href: "/#contact",
  },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Handle closing menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setHamburgerMenuIsOpen(false);
    };
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  // Add/remove overflow-hidden to body when menu opens/closes
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <Link 
            className="flex items-center font-bold tracking-tight text-lg" 
            href="/"
            aria-label="Smooth Scroll Home"
          >
            Smooth Scroll
          </Link>

          <nav className="hidden md:flex space-x-6 mx-auto">
            {menuItem.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex h-full items-center">
            <ThemeToggle />
            <Link
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "ml-4 mr-6 text-sm"
              )}
              href="/signup"
            >
              Sign up
            </Link>
          </div>
          <button
            ref={buttonRef}
            className="ml-6 md:hidden p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            aria-expanded={hamburgerMenuIsOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <X /> : <AlignJustify />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {hamburgerMenuIsOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial="initial"
            exit="exit"
            variants={mobilenavbarVariant}
            animate="animate"
            className="fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/80 backdrop-blur-[12px]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="container flex h-[3.5rem] items-center justify-between">
              <Link 
                className="flex items-center font-bold tracking-tight text-lg" 
                href="/"
                onClick={() => setHamburgerMenuIsOpen(false)}
                aria-label="Smooth Scroll Home"
              >
                Smooth Scroll
              </Link>

              <button
                className="ml-6 p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => setHamburgerMenuIsOpen(false)}
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="container flex flex-col gap-y-6 pt-12 pb-8">
              <motion.ul
                variants={containerVariants}
                initial="initial"
                animate="open"
                className="flex flex-col gap-y-6"
              >
                {menuItem.map((item) => (
                  <li key={item.id}>
                    <motion.div
                      variants={mobileLinkVar}
                      className="border-b border-border hover:text-foreground py-2"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setHamburgerMenuIsOpen(false)}
                        className="block w-full py-2 text-foreground/80 hover:text-foreground transition-colors"
                      >
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </motion.ul>
              
              <motion.div 
                variants={mobileLinkVar} 
                className="mt-6"
              >
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full justify-center"
                  )}
                  href="/signup"
                  onClick={() => setHamburgerMenuIsOpen(false)}
                >
                  Sign up
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
