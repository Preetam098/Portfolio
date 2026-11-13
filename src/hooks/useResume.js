import { useCallback, useEffect, useState } from 'react';
import { fetchResume } from '../services/resumeService';

const INITIAL_STATE = { data: null, loading: true, error: null };

export function useResume() {
  const [state, setState] = useState(INITIAL_STATE);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    setState(INITIAL_STATE);

    fetchResume(controller.signal)
      .then((data) => {
        if (active) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (active && error.name !== 'AbortError') {
          setState({ data: null, loading: false, error });
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [attempt]);

  const retry = useCallback(() => {
    setAttempt((current) => current + 1);
  }, []);

  return { ...state, retry };
}
