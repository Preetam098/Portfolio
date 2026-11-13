import { useCallback, useEffect, useState } from 'react';
import { SECTION_IDS, UI_TEXT } from '../../constants';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useScrolled } from '../../hooks/useScrolled';
import { getInitials, getSectionHref, hasValue } from '../../utils/helpers';
import { Container } from '../common/Container';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { Navigation } from './Navigation';

export function Header({ name, navItems, theme, onToggleTheme }) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const displayName = hasValue(name) ? name : UI_TEXT.fallbackName;

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((current) => !current), []);

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`.trim()}>
      <Container className="header__inner">
        <a className="header__logo" href={getSectionHref(SECTION_IDS.HERO)}>
          <span className="header__logo-mark" aria-hidden="true">
            {getInitials(displayName) || UI_TEXT.brandInitial}
          </span>
          <span className="header__logo-text">{displayName}</span>
        </a>
        <div className="header__actions">
          <Navigation items={navItems} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <MobileMenu
            open={menuOpen}
            items={navItems}
            onToggle={toggleMenu}
            onClose={closeMenu}
          />
        </div>
      </Container>
    </header>
  );
}
