import { RESUME_PATH, UI_TEXT } from '../../constants';
import { Button } from './Button';

export function ResumeButton({ variant = 'secondary', label = UI_TEXT.downloadResume }) {
  return (
    <Button href={RESUME_PATH} variant={variant} download>
      {label}
    </Button>
  );
}
