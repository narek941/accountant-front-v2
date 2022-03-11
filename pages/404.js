import React from 'react';

import { HelmetLayout } from 'layouts/index';
import { ErrorContainer } from 'containers/index';

const ErrorPage = () => (
  <HelmetLayout
    title="404 - Page not found"
    metaDescription="Page not found"
    isErorPage
  >
    <ErrorContainer />
  </HelmetLayout>
);

export default ErrorPage;
