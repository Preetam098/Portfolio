import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RESUME_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../data/resume.json',
);

const STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  SERVER_ERROR: 500,
};

function sendJson(response, status, payload) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(payload));
}

async function readResumeData() {
  const raw = await readFile(RESUME_PATH, 'utf8');
  return JSON.parse(raw);
}

export function createResumeApiHandler() {
  return async function handleResumeRequest(request, response) {
    if (request.method !== 'GET') {
      sendJson(response, STATUS.METHOD_NOT_ALLOWED, { error: 'Method not allowed' });
      return;
    }

    try {
      const resume = await readResumeData();
      sendJson(response, STATUS.OK, resume);
    } catch (error) {
      const status = error.code === 'ENOENT' ? STATUS.NOT_FOUND : STATUS.SERVER_ERROR;
      sendJson(response, status, { error: error.message });
    }
  };
}
