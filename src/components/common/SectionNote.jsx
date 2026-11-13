import { hasValue } from '../../utils/helpers';

export function SectionNote({ children }) {
  if (!hasValue(children)) {
    return null;
  }

  return <p className="section-note">{children}</p>;
}
