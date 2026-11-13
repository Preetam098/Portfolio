import { SECTION_IDS, UI_TEXT } from '../../constants';
import { EmptyState } from '../common/EmptyState';
import { Section } from '../common/Section';
import { SectionNote } from '../common/SectionNote';
import { CertificationItem } from './CertificationItem';

export function Certifications({ items = [], title, subtitle, note }) {
  const certifications = Array.isArray(items) ? items.filter((item) => item?.title) : [];

  return (
    <Section id={SECTION_IDS.CERTIFICATIONS} title={title} subtitle={subtitle}>
      {certifications.length > 0 ? (
        <>
          <div className="certifications__list">
            {certifications.map((item) => (
              <CertificationItem key={`${item.title}-${item.issuer}`} item={item} />
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
