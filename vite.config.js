import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createResumeApiHandler } from './server/resumeApi.js';

function resumeApiPlugin() {
  const mountHandler = (server) => {
    server.middlewares.use('/api/resume', createResumeApiHandler());
  };

  return {
    name: 'resume-api',
    configureServer(server) {
      mountHandler(server);
    },
    configurePreviewServer(server) {
      mountHandler(server);
    },
  };
}

export default defineConfig({
  plugins: [react(), resumeApiPlugin()],
});
