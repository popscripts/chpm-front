"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type FadeInProviderProps = {
  children: React.ReactNode;
};

export default function FadeInProvider({ children }: FadeInProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".animate-reveal"),
      );
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observedElements = new WeakSet<Element>();
    const revealedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealedElements.add(entry.target);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const observeRevealElement = (element: HTMLElement) => {
      if (revealedElements.has(element)) {
        if (!element.classList.contains("is-visible")) {
          element.classList.add("is-visible");
        }
        return;
      }

      if (
        element.classList.contains("is-visible") ||
        observedElements.has(element)
      ) {
        return;
      }

      observer.observe(element);
      observedElements.add(element);
    };

    const observeRevealElementsIn = (root: ParentNode | HTMLElement) => {
      if (
        root instanceof HTMLElement &&
        root.classList.contains("animate-reveal")
      ) {
        observeRevealElement(root);
      }

      root
        .querySelectorAll<HTMLElement>(".animate-reveal")
        .forEach((element) => observeRevealElement(element));
    };

    observeRevealElementsIn(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.target instanceof HTMLElement
        ) {
          const target = mutation.target;
          if (
            target.classList.contains("animate-reveal") &&
            revealedElements.has(target) &&
            !target.classList.contains("is-visible")
          ) {
            target.classList.add("is-visible");
          }
        }

        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          observeRevealElementsIn(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
