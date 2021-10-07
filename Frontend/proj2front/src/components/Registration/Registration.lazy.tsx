import React, { lazy, Suspense } from 'react';

const LazyRegistration = lazy(() => import('./Registration'));

const Registration = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRegistration {...props} />
  </Suspense>
);

export default Registration;
