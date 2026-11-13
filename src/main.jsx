import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';
import './styles/utilities.css';
import './styles/components.css';
import './styles/layout.css';
import './styles/sections/hero.css';
import './styles/sections/about.css';
import './styles/sections/skills.css';
import './styles/sections/experience.css';
import './styles/sections/projects.css';
import './styles/sections/education.css';
import './styles/sections/certifications.css';
import './styles/sections/contact.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
