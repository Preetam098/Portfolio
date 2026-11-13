import { FEATURED_PROJECT_INDEX, SECTION_IDS, UI_TEXT } from '../../constants';
import { EmptyState } from '../common/EmptyState';
import { Section } from '../common/Section';
import { SectionNote } from '../common/SectionNote';
import { ProjectCard } from './ProjectCard';

export function Projects({ items = [], title, subtitle, note }) {
  const projects = Array.isArray(items) ? items.filter((item) => item?.title) : [];

  return (
    <Section id={SECTION_IDS.PROJECTS} title={title} subtitle={subtitle}>
      {projects.length > 0 ? (
        <>
          <div className="projects__grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured={index === FEATURED_PROJECT_INDEX}
              />
            ))}
          </div>
          <SectionNote>{note}</SectionNote>
        </>
      ) : (
        <EmptyState title={UI_TEXT.emptyTitle} description={UI_TEXT.emptyDescription} />
      )}
    </Section>
  );
}
