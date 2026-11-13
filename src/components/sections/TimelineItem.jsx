import { UI_TEXT } from '../../constants';
import { filterValid, formatDateRange, hasValue } from '../../utils/helpers';
import { Card } from '../common/Card';

export function TimelineItem({ item }) {
  const { company, role, startDate, endDate, location, description } = item;
  const range = formatDateRange(startDate, endDate, UI_TEXT.present);
  const points = filterValid(description);
  const hasCompany = hasValue(company);
  const hasLocation = hasValue(location);

  return (
    <li className="timeline__item">
      <Card className="timeline__card">
        <div className="timeline__head">
          <h3 className="timeline__role">{role}</h3>
          {hasValue(range) ? <span className="timeline__range">{range}</span> : null}
        </div>
        {hasCompany || hasLocation ? (
          <p className="timeline__company">
            {hasCompany ? <span>{company}</span> : null}
            {hasLocation ? <span>{location}</span> : null}
          </p>
        ) : null}
        {points.length > 0 ? (
          <ul className="timeline__list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
      </Card>
    </li>
  );
}
