"use client";

import { useCallback, useEffect, useRef } from "react";

interface UseFocusTrapOptions {
  enabled?: boolean;
  onEscapeKey?: () => void;
}

export function useGlobalFocusTrap({ 
  enabled = true, 
  onEscapeKey 
}: UseFocusTrapOptions = {}) {
  const focusTrapRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Store the last focused element before the trap is activated
  const savePreviousFocus = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      previouslyFocusedElement.current = document.activeElement;
    }
  }, []);

  // Restore focus to the previously focused element when the trap is deactivated
  const restorePreviousFocus = useCallback(() => {
    if (previouslyFocusedElement.current) {
      previouslyFocusedElement.current.focus({ preventScroll: true });
      previouslyFocusedElement.current = null;
    }
  }, []);

  // Handle escape key press
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape" && onEscapeKey) {
      onEscapeKey();
    }
  }, [onEscapeKey]);

  // Create focus trap logic
  useEffect(() => {
    if (!enabled || !focusTrapRef.current) return;

    const trapElement = focusTrapRef.current;
    
    // Get all focusable elements within the trap
    const getFocusableElements = () => {
      const selector = [
        "a[href]", 
        "button:not([disabled])", 
        "input:not([disabled])",
        "select:not([disabled])", 
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])"
      ].join(", ");
      
      return Array.from(trapElement.querySelectorAll<HTMLElement>(selector))
        .filter(el => el.tabIndex !== -1);
    };

    // Handle focus trap
    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      
      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      // Shift + Tab
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } 
      // Tab
      else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Save current focus and set up listeners
    savePreviousFocus();
    document.addEventListener("keydown", handleFocusTrap);
    document.addEventListener("keydown", handleEscapeKey);
    
    // Ensure focus is contained within the trap (focus first element)
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0 && !trapElement.contains(document.activeElement)) {
      focusableElements[0].focus();
    }

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleFocusTrap);
      document.removeEventListener("keydown", handleEscapeKey);
      restorePreviousFocus();
    };
  }, [enabled, savePreviousFocus, restorePreviousFocus, handleEscapeKey]);

  return { focusTrapRef };
}
