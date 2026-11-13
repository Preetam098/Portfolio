import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { filterValid, hasValue } from '../../utils/helpers';

export function SkillGroup({ category, note, items }) {
  const skills = filterValid(items);

  if (skills.length === 0) {
    return null;
  }

  return (
    <Card className="skill-group">
      <h3 className="skill-group__title">{category}</h3>
      {hasValue(note) ? <p className="skill-group__note">{note}</p> : null}
      <ul className="skill-group__list">
        {skills.map((skill) => (
          <li key={`${category}-${skill}`}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
