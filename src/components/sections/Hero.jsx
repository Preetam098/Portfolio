import { SECTION_IDS, UI_TEXT } from '../../constants';
import { getSectionHref, hasValue } from '../../utils/helpers';
import { AvailabilityPill } from '../common/AvailabilityPill';
import { Avatar } from '../common/Avatar';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { ResumeButton } from '../common/ResumeButton';
import { SocialLinks } from '../common/SocialLinks';
import { HeroStats } from './HeroStats';

export function Hero({ personalInfo = {}, stats = [] }) {
  const { name, title, summary, location, available, photo, socialLinks } = personalInfo;
  const displayName = hasValue(name) ? name : UI_TEXT.fallbackName;
  const headline = hasValue(title) ? title : displayName;
  const statItems = Array.isArray(stats) ? stats : [];

  return (
    <section
      id={SECTION_IDS.HERO}
      className="section hero"
      aria-labelledby="hero-title"
    >
      <Container className="hero__inner">
        <div className="hero__content">
          <AvailabilityPill available={available} />
          {hasValue(name) ? <p className="hero__name">{name}</p> : null}
          <h1 className="hero__title" id="hero-title">
            {headline}
            {hasValue(name) ? <span className="visually-hidden">{` ${displayName}`}</span> : null}
          </h1>
          {hasValue(location) ? <p className="hero__location">{location}</p> : null}
          {hasValue(summary) ? <p className="hero__summary">{summary}</p> : null}
          <div className="hero__actions">
            <Button href={getSectionHref(SECTION_IDS.PROJECTS)}>
              {UI_TEXT.viewWork}
            </Button>
            <Button href={getSectionHref(SECTION_IDS.CONTACT)} variant="secondary">
              {UI_TEXT.getInTouch}
            </Button>
            <ResumeButton variant="ghost" />
          </div>
          <SocialLinks links={socialLinks} className="hero__socials" />
          <HeroStats items={statItems} />
        </div>
        <div className="hero__aside">
          <Avatar src={photo} name={displayName} priority />
        </div>
      </Container>
    </section>
  );
}
