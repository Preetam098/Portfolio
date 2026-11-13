import { SECTION_IDS, SECTION_TITLES, UI_TEXT } from '../../constants';
import { buildContactDetails } from '../../utils/contactDetails';
import { getSectionHref, hasValue } from '../../utils/helpers';
import { Button } from '../common/Button';
import { DetailList } from '../common/DetailList';
import { EmptyState } from '../common/EmptyState';
import { PhotoGallery } from '../common/PhotoGallery';
import { Section } from '../common/Section';

export function About({ personalInfo = {}, photos }) {
  const { summary } = personalInfo;
  const details = buildContactDetails(personalInfo);
  const hasSummary = hasValue(summary);

  return (
    <Section id={SECTION_IDS.ABOUT} title={SECTION_TITLES[SECTION_IDS.ABOUT]}>
      <div className="about__inner">
        <div className="about__details">
          {hasSummary ? (
            <p className="about__summary">{summary}</p>
          ) : (
            <EmptyState
              title={UI_TEXT.emptyTitle}
              description={UI_TEXT.emptyDescription}
            />
          )}
          <div className="about__actions">
            <Button href={getSectionHref(SECTION_IDS.CONTACT)} variant="secondary">
              {UI_TEXT.getInTouch}
            </Button>
          </div>
        </div>
        <DetailList items={details} />
      </div>
      <PhotoGallery photos={photos} title={UI_TEXT.galleryTitle} />
    </Section>
  );
}
