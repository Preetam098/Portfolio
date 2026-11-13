export const API_PATH = '/api/resume';

export const RESUME_PATH = '/resume.pdf';

export const PROJECT_STATUS = {
  LIVE: 'live',
  PRIVATE: 'private',
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const THEME_STORAGE_KEY = 'portfolio-theme';

export const THEME_COLORS = {
  [THEMES.LIGHT]: '#f7f7f5',
  [THEMES.DARK]: '#0a0a0b',
};

export const SECTION_IDS = {
  HERO: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  EDUCATION: 'education',
  CERTIFICATIONS: 'certifications',
  CONTACT: 'contact',
};

export const SECTION_TITLES = {
  [SECTION_IDS.ABOUT]: 'About',
  [SECTION_IDS.SKILLS]: 'Skills',
  [SECTION_IDS.EXPERIENCE]: 'Experience',
  [SECTION_IDS.PROJECTS]: 'Projects',
  [SECTION_IDS.EDUCATION]: 'Education',
  [SECTION_IDS.CERTIFICATIONS]: 'Certifications',
  [SECTION_IDS.CONTACT]: 'Contact',
};

export const SECTION_SUBTITLES = {
  [SECTION_IDS.SKILLS]: 'The tools and technologies I work with.',
  [SECTION_IDS.EXPERIENCE]: 'Where I have worked and what I built.',
  [SECTION_IDS.PROJECTS]: 'Selected work, shipped end to end.',
  [SECTION_IDS.CERTIFICATIONS]: 'Courses and credentials worth noting.',
};

export const NAV_ITEMS = [
  { id: SECTION_IDS.ABOUT, label: 'About' },
  { id: SECTION_IDS.SKILLS, label: 'Skills' },
  { id: SECTION_IDS.EXPERIENCE, label: 'Experience' },
  { id: SECTION_IDS.PROJECTS, label: 'Projects' },
  { id: SECTION_IDS.EDUCATION, label: 'Education' },
  { id: SECTION_IDS.CONTACT, label: 'Contact' },
];

export const UI_TEXT = {
  fallbackName: 'Your Name',
  fallbackTitle: 'Portfolio',
  brandInitial: 'P',
  skipLink: 'Skip to content',
  menuOpen: 'Open navigation menu',
  menuClose: 'Close navigation menu',
  loading: 'Loading resume data',
  errorTitle: 'Could not load the resume',
  errorDescription: 'The resume data is unavailable right now. Please try again.',
  errorAction: 'Try again',
  emptyTitle: 'Not added yet',
  emptyDescription: 'This section will appear once the resume data is updated.',
  present: 'Present',
  viewWork: 'View work',
  getInTouch: 'Get in touch',
  liveSite: 'Live site',
  sourceCode: 'Source code',
  downloadResume: 'Download resume',
  available: 'Available for new projects',
  unavailable: 'Not taking new work right now',
  statusLive: 'Live',
  statusPrivate: 'Private',
  statYears: 'Years experience',
  statProjects: 'Projects shipped',
  statTechnologies: 'Technologies',
  yearSuffix: '+',
  backToTop: 'Back to top',
  footerNote: 'Built with React and Vite.',
  emailAction: 'Send an email',
  contactNote:
    'Open to new opportunities, collaborations and interesting engineering problems. The fastest way to reach me is email.',
  themeToLight: 'Switch to light mode',
  themeToDark: 'Switch to dark mode',
  galleryTitle: 'In person',
  photoAltSuffix: 'portrait',
};

export const DETAIL_LABELS = {
  LOCATION: 'Location',
  EMAIL: 'Email',
  PHONE: 'Phone',
};

export const TITLE_SEPARATOR = ' | ';

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

export const FEATURED_PROJECT_INDEX = 0;
