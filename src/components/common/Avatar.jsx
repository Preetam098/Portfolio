import { UI_TEXT } from '../../constants';
import { getInitials, hasValue } from '../../utils/helpers';

export function Avatar({ src, name, alt, size = 'portrait', priority = false }) {
  const hasPhoto = hasValue(src);
  const label = hasValue(alt)
    ? alt
    : hasValue(name)
      ? `${name} ${UI_TEXT.photoAltSuffix}`
      : '';

  return (
    <div className={`avatar avatar--${size}`}>
      {hasPhoto ? (
        <img
          src={src}
          alt={label}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      ) : (
        <span aria-hidden="true">{getInitials(name) || UI_TEXT.brandInitial}</span>
      )}
    </div>
  );
}
