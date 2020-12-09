import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Research from 'components/Research';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="research" />
      <hr />
      <Research />
    </Layout>
  );
};

export default IndexPage;
