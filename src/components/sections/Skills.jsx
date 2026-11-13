import { SECTION_IDS, UI_TEXT } from '../../constants';
import { EmptyState } from '../common/EmptyState';
import { Section } from '../common/Section';
import { SectionNote } from '../common/SectionNote';
import { SkillGroup } from './SkillGroup';

export function Skills({ items = [], title, subtitle, note }) {
  const groups = Array.isArray(items) ? items.filter((item) => item?.category) : [];

  return (
    <Section id={SECTION_IDS.SKILLS} title={title} subtitle={subtitle}>
      {groups.length > 0 ? (
        <>
          <div className="skills__grid">
            {groups.map((group) => (
              <SkillGroup
                key={group.category}
                category={group.category}
                note={group.note}
                items={group.items}
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
