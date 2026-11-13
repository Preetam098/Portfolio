import { hasValue } from '../../utils/helpers';
import { Card } from '../common/Card';

export function CertificationItem({ item }) {
  const { title, issuer, year, description } = item;

  return (
    <Card as="article" className="certification">
      <div className="certification__body">
        <h3 className="certification__title">{title}</h3>
        {hasValue(issuer) ? <p className="certification__issuer">{issuer}</p> : null}
        {hasValue(description) ? (
          <p className="certification__description">{description}</p>
        ) : null}
      </div>
      {hasValue(year) ? <span className="certification__year">{year}</span> : null}
    </Card>
  );
}
