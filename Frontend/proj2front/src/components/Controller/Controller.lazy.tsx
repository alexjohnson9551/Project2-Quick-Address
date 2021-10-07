import React, { lazy, Suspense } from 'react';

const LazyController = lazy(() => import('./Controller'));

const Controller = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyController {...props} />
  </Suspense>
);

export default Controller;
