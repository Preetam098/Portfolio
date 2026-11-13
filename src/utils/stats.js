import { PROJECT_STATUS, UI_TEXT } from '../constants';
import { filterValid, hasValue } from './helpers';

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const MONTH_PATTERN = /^([a-z]{3,})\.?\s+(\d{4})$/i;
const YEAR_PATTERN = /^(\d{4})$/;

export function parseMonthYear(value) {
  if (!hasValue(value)) {
    return null;
  }

  const trimmed = value.trim();
  const yearOnly = trimmed.match(YEAR_PATTERN);

  if (yearOnly) {
    return new Date(Number(yearOnly[1]), 0, 1);
  }

  const match = trimmed.match(MONTH_PATTERN);

  if (!match) {
    return null;
  }

  const month = MONTHS[match[1].slice(0, 3).toLowerCase()];

  if (month === undefined) {
    return null;
  }

  return new Date(Number(match[2]), month, 1);
}

function getEarliestStart(experience) {
  const dates = (Array.isArray(experience) ? experience : [])
    .map((role) => parseMonthYear(role?.startDate))
    .filter(Boolean);

  if (dates.length === 0) {
    return null;
  }

  return dates.reduce((earliest, date) => (date < earliest ? date : earliest));
}

export function getExperienceYears(experience, now = new Date()) {
  const earliest = getEarliestStart(experience);

  if (!earliest) {
    return null;
  }

  const years = Math.floor((now - earliest) / (365.25 * 24 * 60 * 60 * 1000));

  return years > 0 ? years : null;
}

export function countUniqueTechnologies(skills) {
  const seen = new Set();

  (Array.isArray(skills) ? skills : []).forEach((group) => {
    filterValid(group?.items).forEach((item) => {
      const key = item.trim().toLowerCase();

      if (!seen.has(key)) {
        seen.add(key);
      }
    });
  });

  return seen.size;
}

export function getProjectStatus(project) {
  return hasValue(project?.liveUrl) ? PROJECT_STATUS.LIVE : PROJECT_STATUS.PRIVATE;
}

export function getProjectStatusLabel(status) {
  return status === PROJECT_STATUS.LIVE ? UI_TEXT.statusLive : UI_TEXT.statusPrivate;
}

function formatCount(value) {
  return value > 0 ? `${value}${UI_TEXT.yearSuffix}` : '';
}

export function buildHeroStats(data) {
  const experience = Array.isArray(data?.experience) ? data.experience : [];
  const projects = Array.isArray(data?.projects) ? data.projects : [];
  const years = getExperienceYears(experience);
  const technologies = countUniqueTechnologies(data?.skills);

  return [
    { value: formatCount(years), label: UI_TEXT.statYears },
    { value: formatCount(projects.length), label: UI_TEXT.statProjects },
    { value: formatCount(technologies), label: UI_TEXT.statTechnologies },
  ].filter((stat) => hasValue(stat.value));
}
