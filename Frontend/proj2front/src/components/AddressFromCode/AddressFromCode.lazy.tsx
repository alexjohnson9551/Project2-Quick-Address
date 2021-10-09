import React, { lazy, Suspense } from 'react';

const LazyAddressFromCode = lazy(() => import('./AddressFromCode'));

const AddressFromCode = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAddressFromCode {...props} />
  </Suspense>
);

export default AddressFromCode;
