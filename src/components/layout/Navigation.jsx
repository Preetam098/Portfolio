import { NavLinks } from './NavLinks';

export function Navigation({ items }) {
  return (
    <nav className="nav" aria-label="Primary">
      <NavLinks items={items} />
    </nav>
  );
}
