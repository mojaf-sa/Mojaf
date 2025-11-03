import React from 'react';
import { organizationSchema, websiteSchema } from './organizationalSchema';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
