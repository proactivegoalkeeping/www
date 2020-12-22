import * as React from 'react';

import { LayoutDefault } from '../layouts/default';
import { Link } from 'gatsby';
import styles from './404.module.scss';

export default () => (
  <LayoutDefault>
    <div className={styles.content}>
      <h1 className={styles.header}>Page not found</h1>
      <p className={styles.errorMessage}>
        The page you are looking for does not exists.
      </p>
      <Link to="/">Home</Link>
    </div>
  </LayoutDefault>
);
