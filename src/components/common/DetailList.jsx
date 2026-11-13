import { hasValue } from '../../utils/helpers';

export function DetailList({ items, className = '' }) {
  const visibleItems = Array.isArray(items)
    ? items.filter((item) => hasValue(item?.value))
    : [];

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <dl className={`detail-list ${className}`.trim()}>
      {visibleItems.map((item) => (
        <div className="detail-list__row" key={item.label}>
          <dt>{item.label}</dt>
          <dd>
            {item.href ? <a href={item.href}>{item.value}</a> : item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
