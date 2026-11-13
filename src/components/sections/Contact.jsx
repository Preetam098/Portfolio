import { SECTION_IDS, SECTION_TITLES, UI_TEXT } from '../../constants';
import { buildMailto, hasValue } from '../../utils/helpers';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { ResumeButton } from '../common/ResumeButton';
import { SocialLinks } from '../common/SocialLinks';

export function Contact({ personalInfo = {} }) {
  const { email, socialLinks } = personalInfo;
  const hasEmail = hasValue(email);

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="contact"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className="contact__panel">
          <div className="contact__side">
            <h2 className="contact__heading" id="contact-title">
              {SECTION_TITLES[SECTION_IDS.CONTACT]}
            </h2>
            <p className="contact__description">{UI_TEXT.contactNote}</p>
            {hasEmail ? (
              <div className="contact__actions">
                <Button href={buildMailto(email)}>{UI_TEXT.emailAction}</Button>
                <ResumeButton variant="secondary" />
              </div>
            ) : null}
          </div>
          <SocialLinks links={socialLinks} />
        </div>
      </Container>
    </section>
  );
}
