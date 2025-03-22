"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useGlobalFocusTrap } from "@/lib/use-focus-trap";

const projects = [
  {
    id: 1,
    name: "Johnson Roofing",
    description: "Smart Site with 73% conversion rate",
    gradient: "from-primary/5 to-primary/20",
    rotate: "-3deg",
    fullDescription: "A comprehensive website redesign that increased lead conversion by 73% through AI-powered customer journey optimization and targeted content delivery."
  },
  {
    id: 2,
    name: "Williams Plumbing",
    description: "Lead generation system with booking",
    gradient: "from-blue-500/5 to-blue-500/20",
    rotate: "2deg",
    fullDescription: "Integrated lead generation platform with automated appointment scheduling, customer notifications, and service history tracking to streamline operations."
  },
  {
    id: 3,
    name: "Martinez Electric",
    description: "AI-powered customer portal",
    gradient: "from-purple-500/5 to-purple-500/20",
    rotate: "-2deg",
    fullDescription: "Custom customer portal with AI-driven service recommendations, real-time project tracking, and automated invoice generation for improved customer satisfaction."
  }
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  // Focus trap for modal accessibility
  const { focusTrapRef } = useGlobalFocusTrap({ 
    enabled: !!selectedProject,
    onEscapeKey: () => setSelectedProject(null)
  });
  const initialFocusRef = useRef<HTMLButtonElement>(null);
  
  // Set focus to close button when modal opens
  useEffect(() => {
    if (selectedProject && initialFocusRef.current) {
      setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 100);
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Recent Projects
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            Transforming local businesses with custom digital solutions that drive real results.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mx-auto max-w-6xl justify-center">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="relative h-[325px] w-full md:w-1/3 cursor-pointer"
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -10px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 15,
                mass: 1.2
              }}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.name}`}
            >
              <div 
                className={`absolute inset-0 rounded-xl shadow-lg overflow-hidden border border-primary/20 transform ${project.rotate ? `rotate-[${project.rotate}]` : ""}`}
                style={{ transformOrigin: "center center" }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-end`}>
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-medium text-foreground text-lg">{project.name}</h4>
                    <p className="text-sm text-foreground/80">{project.description}</p>
                    <p className="text-xs text-primary mt-2">Click to view details</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${selectedProject.id}`}
          >
            <motion.div 
              ref={focusTrapRef}
              className="bg-background rounded-xl shadow-xl border border-border max-w-3xl w-full max-h-[90vh] overflow-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <button 
                  ref={initialFocusRef}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background border border-border z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className={`w-full h-48 bg-gradient-to-br ${selectedProject.gradient}`}></div>
                
                <div className="p-6">
                  <h3 id={`project-title-${selectedProject.id}`} className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
                  <p className="text-foreground/80 mb-4">{selectedProject.description}</p>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-2">Project Details</h4>
                    <p className="text-foreground/80">{selectedProject.fullDescription}</p>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <a 
                        href="#" 
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label={`View live site for ${selectedProject.name}`}
                      >
                        View Live Site
                      </a>
                      <p className="text-sm text-foreground/60">Completed 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
