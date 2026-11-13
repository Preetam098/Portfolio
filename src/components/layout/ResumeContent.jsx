import { SECTION_IDS, SECTION_SUBTITLES, SECTION_TITLES } from '../../constants';
import { buildHeroStats } from '../../utils/stats';
import { About } from '../sections/About';
import { Certifications } from '../sections/Certifications';
import { Contact } from '../sections/Contact';
import { Education } from '../sections/Education';
import { Experience } from '../sections/Experience';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';

export function ResumeContent({ data }) {
  const {
    personalInfo,
    gallery,
    notes = {},
    skills,
    experience,
    projects,
    education,
    certifications,
  } = data;

  return (
    <>
      <Hero personalInfo={personalInfo} stats={buildHeroStats(data)} />
      <About personalInfo={personalInfo} photos={gallery} />
      <Skills
        items={skills}
        title={SECTION_TITLES[SECTION_IDS.SKILLS]}
        subtitle={SECTION_SUBTITLES[SECTION_IDS.SKILLS]}
        note={notes.skills}
      />
      <Experience
        items={experience}
        title={SECTION_TITLES[SECTION_IDS.EXPERIENCE]}
        subtitle={SECTION_SUBTITLES[SECTION_IDS.EXPERIENCE]}
        note={notes.experience}
      />
      <Projects
        items={projects}
        title={SECTION_TITLES[SECTION_IDS.PROJECTS]}
        subtitle={SECTION_SUBTITLES[SECTION_IDS.PROJECTS]}
        note={notes.projects}
      />
      <Education items={education} title={SECTION_TITLES[SECTION_IDS.EDUCATION]} />
      <Certifications
        items={certifications}
        title={SECTION_TITLES[SECTION_IDS.CERTIFICATIONS]}
        subtitle={SECTION_SUBTITLES[SECTION_IDS.CERTIFICATIONS]}
        note={notes.certifications}
      />
      <Contact personalInfo={personalInfo} />
    </>
  );
}
