import { EXTERNAL_LINK_PROPS } from '../../constants';
import { hasValue } from '../../utils/helpers';

export function SocialLinks({ links, className = '' }) {
  const visibleLinks = Array.isArray(links)
    ? links.filter((link) => hasValue(link?.label) && hasValue(link?.url))
    : [];

  if (visibleLinks.length === 0) {
    return null;
  }

  return (
    <ul className={`social-links ${className}`.trim()}>
      {visibleLinks.map((link) => (
        <li key={link.label}>
          <a className="social-links__item" href={link.url} {...EXTERNAL_LINK_PROPS}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
