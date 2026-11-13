import { useMemo } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { getSectionHref } from '../../utils/helpers';

export function NavLinks({ items, onNavigate, className = '' }) {
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const activeId = useActiveSection(sectionIds);

  return (
    <ul className={`nav__list ${className}`.trim()}>
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <li key={item.id}>
            <a
              className={`nav__link ${isActive ? 'nav__link--active' : ''}`.trim()}
              href={getSectionHref(item.id)}
              aria-current={isActive ? 'true' : undefined}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
