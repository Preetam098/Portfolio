import { NAV_ITEMS, UI_TEXT } from './constants';
import { ErrorMessage } from './components/common/ErrorMessage';
import { Loader } from './components/common/Loader';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ResumeContent } from './components/layout/ResumeContent';
import { SkipLink } from './components/layout/SkipLink';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import { useResume } from './hooks/useResume';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { data, loading, error, retry } = useResume();
  const { theme, toggleTheme } = useTheme();
  const personalInfo = data?.personalInfo;

  useDocumentTitle(personalInfo);
  useRevealOnScroll(!loading && !error && Boolean(data));

  return (
    <>
      <SkipLink />
      <Header
        name={personalInfo?.name}
        navItems={NAV_ITEMS}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="main" tabIndex={-1}>
        {loading ? <Loader label={UI_TEXT.loading} /> : null}
        {!loading && error ? (
          <div className="container section">
            <ErrorMessage
              title={UI_TEXT.errorTitle}
              description={UI_TEXT.errorDescription}
              actionLabel={UI_TEXT.errorAction}
              onRetry={retry}
            />
          </div>
        ) : null}
        {!loading && !error && data ? <ResumeContent data={data} /> : null}
      </main>
      <Footer personalInfo={personalInfo} />
    </>
  );
}
