export function EmptyState({ title, description }) {
  return (
    <div className="state">
      <h3 className="state__title">{title}</h3>
      {description ? <p className="state__description">{description}</p> : null}
    </div>
  );
}
