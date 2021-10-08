import React, { lazy, Suspense } from 'react';

const LazyNavigation = lazy(() => import('./Navigation'));

const Navigation = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavigation {...props} />
  </Suspense>
);

export default Navigation;
