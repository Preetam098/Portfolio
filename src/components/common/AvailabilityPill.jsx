import { UI_TEXT } from '../../constants';

export function AvailabilityPill({ available }) {
  if (!available) {
    return null;
  }

  return (
    <p className="availability">
      <span className="availability__dot" aria-hidden="true" />
      {UI_TEXT.available}
    </p>
  );
}
