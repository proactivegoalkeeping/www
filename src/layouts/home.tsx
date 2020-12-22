import { Footer } from '../components/footer';
import { Header } from '../components/header';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './layout.module.css';

export const LayoutHome = ({ children }) => {
  return (
    <div className={`${styles.layout} ${styles.home} p-4`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired
};
