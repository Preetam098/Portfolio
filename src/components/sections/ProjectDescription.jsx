import { toTextList } from '../../utils/helpers';

export function ProjectDescription({ text }) {
  const lines = toTextList(text);

  if (lines.length === 0) {
    return null;
  }

  if (lines.length === 1) {
    return <p className="project-card__description">{lines[0]}</p>;
  }

  return (
    <ul className="project-card__list">
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
}
