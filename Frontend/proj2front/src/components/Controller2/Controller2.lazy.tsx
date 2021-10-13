import React, { lazy, Suspense } from 'react';

const LazyController2 = lazy(() => import('./Controller2'));

const Controller2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyController2 {...props} />
  </Suspense>
);

export default Controller2;
