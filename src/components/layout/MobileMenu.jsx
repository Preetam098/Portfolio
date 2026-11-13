import { UI_TEXT } from '../../constants';
import { NavLinks } from './NavLinks';

export function MobileMenu({ open, items, onToggle, onClose }) {
  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? UI_TEXT.menuClose : UI_TEXT.menuOpen}
        onClick={onToggle}
      >
        <span className="mobile-menu__bar" />
        <span className="mobile-menu__bar" />
        <span className="mobile-menu__bar" />
      </button>
      <div
        id="mobile-navigation"
        className={`mobile-menu__panel ${open ? 'is-open' : ''}`.trim()}
      >
        <nav aria-label="Mobile">
          <NavLinks items={items} onNavigate={onClose} className="nav__list--stacked" />
        </nav>
      </div>
    </div>
  );
}
