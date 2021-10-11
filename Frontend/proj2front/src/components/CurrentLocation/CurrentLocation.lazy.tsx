import React, { lazy, Suspense } from 'react';

const LazyCurrentLocation = lazy(() => import('./CurrentLocation'));

const CurrentLocation = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCurrentLocation {...props} />
  </Suspense>
);

export default CurrentLocation;
