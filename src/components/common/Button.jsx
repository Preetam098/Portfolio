import { EXTERNAL_LINK_PROPS } from '../../constants';
import { isExternalUrl } from '../../utils/helpers';

export function Button({
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const linkProps = isExternalUrl(href) ? EXTERNAL_LINK_PROPS : {};

  if (href) {
    return (
      <a className={classes} href={href} {...linkProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
