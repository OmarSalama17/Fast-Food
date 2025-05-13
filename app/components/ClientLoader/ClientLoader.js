'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '../../loading';

export default function ClientLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}
