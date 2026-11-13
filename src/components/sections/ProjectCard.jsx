import { UI_TEXT } from '../../constants';
import { filterValid, hasValue } from '../../utils/helpers';
import { getProjectStatus, getProjectStatusLabel } from '../../utils/stats';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { ProjectDescription } from './ProjectDescription';

export function ProjectCard({ project, featured = false }) {
  const { title, organization, duration, description, techStack, liveUrl, repoUrl } =
    project;
  const stack = filterValid(techStack);
  const status = getProjectStatus(project);
  const hasMeta = hasValue(organization) || hasValue(duration);

  return (
    <Card
      as="article"
      className={`project-card ${featured ? 'project-card--featured' : ''}`.trim()}
      data-reveal
    >
      <div className="project-card__body">
        <div className="project-card__top">
          {hasMeta ? (
            <p className="project-card__meta">
              {hasValue(organization) ? <span>{organization}</span> : null}
              {hasValue(duration) ? <span>{duration}</span> : null}
            </p>
          ) : (
            <span />
          )}
          <Badge variant={status}>{getProjectStatusLabel(status)}</Badge>
        </div>
        <h3 className="project-card__title">{title}</h3>
        <ProjectDescription text={description} />
      </div>
      {stack.length > 0 ? (
        <ul className="project-card__stack">
          {stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="project-card__actions">
        {hasValue(liveUrl) ? (
          <Button href={liveUrl} variant="ghost">
            {UI_TEXT.liveSite}
          </Button>
        ) : null}
        {hasValue(repoUrl) ? (
          <Button href={repoUrl} variant="ghost">
            {UI_TEXT.sourceCode}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
