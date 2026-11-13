export function SectionTitle({ id, title, subtitle }) {
  if (!title) {
    return null;
  }

  return (
    <header className="section-title">
      <h2 className="section-title__heading" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </header>
  );
}
