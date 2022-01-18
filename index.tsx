import React from 'react';
import { useRouter } from 'next/router';

export const usePrefetch = (links: string[]) => {
  const router = useRouter();
  React.useEffect(() => {
    links.forEach(link => {
      router.prefetch(link);
    });
  }, []);
  return router;
};
