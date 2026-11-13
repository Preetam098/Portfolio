export function Loader({ label }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="visually-hidden">{label}</span>
      <div className="loader__bar loader__bar--wide" />
      <div className="loader__bar loader__bar--short" />
      <div className="loader__bar" />
      <div className="loader__bar loader__bar--short" />
    </div>
  );
}
