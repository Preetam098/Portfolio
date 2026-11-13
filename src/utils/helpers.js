export function hasValue(value) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === 'number') {
    return Number.isFinite(value);
  }

  return typeof value === 'string' && value.trim().length > 0;
}

export function getInitials(name) {
  if (!hasValue(name)) {
    return '';
  }

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
}

export function isExternalUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url);
}

export function buildMailto(email) {
  return `mailto:${email}`;
}

export function buildTel(phone) {
  return `tel:${phone.replace(/\s+/g, '')}`;
}

export function getSectionHref(id) {
  return `#${id}`;
}

export function formatDateRange(start, end, presentLabel) {
  if (!hasValue(start) && !hasValue(end)) {
    return '';
  }

  if (!hasValue(start)) {
    return end;
  }

  return `${start} - ${hasValue(end) ? end : presentLabel}`;
}

export function filterValid(items) {
  return Array.isArray(items) ? items.filter((item) => hasValue(item)) : [];
}

export function toTextList(value) {
  if (Array.isArray(value)) {
    return filterValid(value);
  }

  return hasValue(value) ? [value] : [];
}
