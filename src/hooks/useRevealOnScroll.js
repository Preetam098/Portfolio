import { useEffect } from 'react';

const REVEAL_SELECTOR = '[data-reveal]';
const ROOT_CLASS = 'js-reveal';
const VISIBLE_CLASS = 'is-revealed';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const VIEWPORT_MARGIN = 0.92;

function isInView(element) {
  return element.getBoundingClientRect().top < window.innerHeight * VIEWPORT_MARGIN;
}

function reveal(element) {
  element.classList.add(VISIBLE_CLASS);
}

function revealAll(elements) {
  elements.forEach(reveal);
}

export function useRevealOnScroll(ready) {
  useEffect(() => {
    if (!ready) {
      return undefined;
    }

    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    if (elements.length === 0) {
      return undefined;
    }

    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      revealAll(elements);
      return undefined;
    }

    let pending = elements;
    document.documentElement.classList.add(ROOT_CLASS);

    const sweep = () => {
      pending = pending.filter((element) => {
        if (!isInView(element)) {
          return true;
        }

        reveal(element);
        return false;
      });

      if (pending.length === 0) {
        window.removeEventListener('scroll', sweep);
        window.removeEventListener('resize', sweep);
      }
    };

    sweep();
    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep);

    return () => {
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
      document.documentElement.classList.remove(ROOT_CLASS);
    };
  }, [ready]);
}
