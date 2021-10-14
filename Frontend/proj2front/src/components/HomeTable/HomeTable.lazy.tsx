import React, { lazy, Suspense } from 'react';

const LazyHomeTable = lazy(() => import('./HomeTable'));

const HomeTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHomeTable {...props} />
  </Suspense>
);

export default HomeTable;
