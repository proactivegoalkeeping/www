import ImageCharterStandard from '../components/images/charter-standard';
import { LayoutHome } from '../layouts/home';
import React from 'react';
import SEO from '../components/seo';
import styles from './index.module.scss';

const IndexPage = () => (
  <LayoutHome>
    <SEO title="Home" />
    <div className={`${styles.home} w-100 h-100`}>
      <h1>PROACTIVE GOALKEEPING</h1>
    </div>
  </LayoutHome>
);

export default IndexPage;
