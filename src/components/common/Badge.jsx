export function Badge({ children, variant }) {
  const classes = variant ? `badge badge--${variant}` : 'badge';

  return <span className={classes}>{children}</span>;
}
