import { Link, graphql, useStaticQuery } from 'gatsby';

import ImageCrest from '../images/crest';
import { Navigation } from '../navigation';
import React from 'react';
import styles from './header.module.css';

export const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={`d-flex justify-content-between ${styles.header}`}>
      <div className={styles.logo}>
        <Link to="/">logo</Link>
      </div>
      <Navigation />
    </header>
  );
};
