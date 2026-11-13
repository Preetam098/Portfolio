import { Button } from './Button';

export function ErrorMessage({ title, description, actionLabel, onRetry }) {
  return (
    <div className="state state--error" role="alert">
      <h2 className="state__title">{title}</h2>
      <p className="state__description">{description}</p>
      {onRetry ? (
        <Button variant="secondary" onClick={onRetry}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
