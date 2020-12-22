import { Footer } from '../components/footer';
import { Header } from '../components/header';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './layout.module.css';

export const LayoutDefault = ({ children }) => {
  return (
    <div className={`${styles.layout} ${styles.layoutDefault} p-4`}>
      <Header />
      <main role="main" className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired
};
