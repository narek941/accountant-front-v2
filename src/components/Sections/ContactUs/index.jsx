import React from 'react';

import styles from './ContactUs.scss';

const ContactUsSection = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>Կապ Մեզ հետ</h2>
      <div className={styles.contact}>
        <div className={styles.contact__form}>Forms</div>
        <div className={styles.contact__address}>
          <div>Map</div>
          <div>Կոնտակտներ</div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>©2021 ACC ACCOUNTANT. All rights reserved. Powered by ShellLogix</p>
      </div>
    </div>
  );
};

export default ContactUsSection;
