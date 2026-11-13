import { DETAIL_LABELS } from '../constants';
import { buildMailto, buildTel, hasValue } from './helpers';

export function buildContactDetails(personalInfo = {}) {
  const { email, phone, location } = personalInfo;

  return [
    { label: DETAIL_LABELS.LOCATION, value: location },
    {
      label: DETAIL_LABELS.EMAIL,
      value: email,
      href: hasValue(email) ? buildMailto(email) : undefined,
    },
    {
      label: DETAIL_LABELS.PHONE,
      value: phone,
      href: hasValue(phone) ? buildTel(phone) : undefined,
    },
  ];
}
