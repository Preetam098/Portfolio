import resumeFallback from '../../data/resume.json';
import { API_PATH } from '../constants';

const ACCEPT_HEADERS = { Accept: 'application/json' };
const MISSING_ENDPOINT_STATUS = 404;

function isValidPayload(payload) {
  return Boolean(payload) && typeof payload === 'object' && !Array.isArray(payload);
}

function createRequestError(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function isMissingEndpoint(error) {
  return error.status === MISSING_ENDPOINT_STATUS || error instanceof TypeError;
}

async function requestResume(signal) {
  const response = await fetch(API_PATH, { signal, headers: ACCEPT_HEADERS });

  if (!response.ok) {
    throw createRequestError(
      `Resume request failed with status ${response.status}`,
      response.status,
    );
  }

  const payload = await response.json();

  if (!isValidPayload(payload)) {
    throw createRequestError('Resume payload is not a valid object');
  }

  return payload;
}

export async function fetchResume(signal) {
  try {
    return await requestResume(signal);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw error;
    }

    if (isMissingEndpoint(error)) {
      return resumeFallback;
    }

    throw error;
  }
}
