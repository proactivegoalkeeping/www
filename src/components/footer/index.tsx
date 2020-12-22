import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`mt-2 p-2 w100 text-right text-muted ${styles.footer}`}>
      copyrights ProActive Goalkeeping &copy; 2020 - {currentYear}
    </footer>
  );
};
