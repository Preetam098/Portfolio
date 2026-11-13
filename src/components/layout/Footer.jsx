import { SECTION_IDS, UI_TEXT } from '../../constants';
import { getSectionHref, hasValue } from '../../utils/helpers';
import { Container } from '../common/Container';
import { SocialLinks } from '../common/SocialLinks';

export function Footer({ personalInfo }) {
  const name = hasValue(personalInfo?.name) ? personalInfo.name : UI_TEXT.fallbackName;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div>
          <p className="footer__meta">
            {name} - {year}
          </p>
          <p className="footer__meta">{UI_TEXT.footerNote}</p>
        </div>
        <SocialLinks links={personalInfo?.socialLinks} />
        <a className="footer__top" href={getSectionHref(SECTION_IDS.HERO)}>
          {UI_TEXT.backToTop}
        </a>
      </Container>
    </footer>
  );
}
