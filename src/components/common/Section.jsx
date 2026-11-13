import { Container } from './Container';
import { SectionTitle } from './SectionTitle';

export function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
      aria-labelledby={`${id}-title`}
      data-reveal
    >
      <Container>
        <SectionTitle id={`${id}-title`} title={title} subtitle={subtitle} />
        {children}
      </Container>
    </section>
  );
}
