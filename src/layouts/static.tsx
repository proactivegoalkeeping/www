import { Footer } from '../components/footer';
import { Header } from '../components/header';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './layout.module.css';

export const LayoutStatic = ({ children }) => {
  return (
    <div className={`${styles.layout} ${styles.layoutStatic} p-4`}>
      <Header />
      <main role="main" className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

LayoutStatic.propTypes = {
  children: PropTypes.node.isRequired
};
