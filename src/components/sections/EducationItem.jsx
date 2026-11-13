import { UI_TEXT } from '../../constants';
import { filterValid, formatDateRange, hasValue } from '../../utils/helpers';
import { Card } from '../common/Card';

export function EducationItem({ item }) {
  const { institute, degree, startYear, endYear, location, highlights } = item;
  const years = formatDateRange(startYear, endYear, UI_TEXT.present);
  const points = filterValid(highlights);

  return (
    <Card as="article" className="education__item">
      <h3 className="education__institute">{institute}</h3>
      {hasValue(degree) ? <p className="education__degree">{degree}</p> : null}
      {hasValue(years) || hasValue(location) ? (
        <p className="education__meta">
          {hasValue(years) ? <span>{years}</span> : null}
          {hasValue(location) ? <span>{location}</span> : null}
        </p>
      ) : null}
      {points.length > 0 ? (
        <ul className="education__highlights">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
