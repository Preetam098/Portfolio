import { useEffect } from 'react';
import { TITLE_SEPARATOR, UI_TEXT } from '../constants';
import { hasValue } from '../utils/helpers';

export function useDocumentTitle(personalInfo) {
  const name = hasValue(personalInfo?.name) ? personalInfo.name : UI_TEXT.fallbackName;
  const title = hasValue(personalInfo?.title) ? personalInfo.title : UI_TEXT.fallbackTitle;

  useEffect(() => {
    document.title = `${name}${TITLE_SEPARATOR}${title}`;
  }, [name, title]);
}
