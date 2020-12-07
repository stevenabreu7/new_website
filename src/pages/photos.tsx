import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Galleries from 'components/Galleries';

const PhotoPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="photos" />
      <Galleries />
    </Layout>
  );
};

export default PhotoPage;
