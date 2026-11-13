export function HeroStats({ items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <dl className="hero__stats">
      {items.map((item) => (
        <div className="hero__stat" key={item.label}>
          <dt className="hero__stat-label">{item.label}</dt>
          <dd className="hero__stat-value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
