import { SECTION_IDS, UI_TEXT } from '../../constants';
import { EmptyState } from '../common/EmptyState';
import { ResumeButton } from '../common/ResumeButton';
import { Section } from '../common/Section';
import { SectionNote } from '../common/SectionNote';
import { TimelineItem } from './TimelineItem';

export function Experience({ items = [], title, subtitle, note }) {
  const roles = Array.isArray(items) ? items.filter((item) => item?.role || item?.company) : [];

  return (
    <Section id={SECTION_IDS.EXPERIENCE} title={title} subtitle={subtitle}>
      {roles.length > 0 ? (
        <>
          <ol className="timeline">
            {roles.map((item) => (
              <TimelineItem key={`${item.company}-${item.role}-${item.startDate}`} item={item} />
            ))}
          </ol>
          <div className="experience__footer">
            <SectionNote>{note}</SectionNote>
            <ResumeButton variant="ghost" />
          </div>
        </>
      ) : (
        <EmptyState title={UI_TEXT.emptyTitle} description={UI_TEXT.emptyDescription} />
      )}
    </Section>
  );
}
