import { useCallback, useEffect, useRef, useState } from 'react';
import { THEME_COLORS, THEME_STORAGE_KEY, THEMES } from '../constants';

const LIGHT_QUERY = '(prefers-color-scheme: light)';

function isKnownTheme(value) {
  return value === THEMES.LIGHT || value === THEMES.DARK;
}

function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isKnownTheme(stored) ? stored : null;
  } catch {
    return null;
  }
}

function persistTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable in private browsing.
  }
}

function getSystemTheme() {
  return window.matchMedia(LIGHT_QUERY).matches ? THEMES.LIGHT : THEMES.DARK;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', THEME_COLORS[theme]);
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(() => readStoredTheme() ?? getSystemTheme());
  const chosenRef = useRef(readStoredTheme() !== null);

  useEffect(() => {
    applyTheme(theme);

    if (chosenRef.current) {
      persistTheme(theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    chosenRef.current = true;
    setTheme((current) => (current === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  }, []);

  return { theme, toggleTheme };
}
