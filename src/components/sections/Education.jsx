import { SECTION_IDS, UI_TEXT } from '../../constants';
import { EmptyState } from '../common/EmptyState';
import { Section } from '../common/Section';
import { EducationItem } from './EducationItem';

export function Education({ items = [], title }) {
  const entries = Array.isArray(items) ? items.filter((item) => item?.institute) : [];

  return (
    <Section id={SECTION_IDS.EDUCATION} title={title}>
      {entries.length > 0 ? (
        <div className="education__grid">
          {entries.map((item) => (
            <EducationItem key={`${item.institute}-${item.degree}`} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState title={UI_TEXT.emptyTitle} description={UI_TEXT.emptyDescription} />
      )}
    </Section>
  );
}
