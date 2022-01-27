import React from 'react';

import styles from './ContactUs.scss';

import Input from '../../Input/index';
import { MailIcon, PhoneIcon, LocationIcon } from '../../../icons';

const ContactUsSection = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>Կապ Մեզ հետ</h2>
      <div className={styles.contact}>
        <form onSubmit={() => {}} className={styles.contact__form}>
          <div className={styles.contact__form__wrapper}>
            <div className={styles.contact__form__inner}>
              <label
                htmlFor="contact__name"
                className={styles.contact__form__label}
              >
                Անուն Ազգանուն<span>*</span>
              </label>
              <Input
                type="Input"
                id="contact__name"
                name="contact__name"
                className={styles.contact__form__inputs}
                placeholder="Name Surname"
              />
            </div>
            <div className={styles.contact__form__inner}>
              <label
                htmlFor="contact__tel"
                className={styles.contact__form__label}
              >
                Հեռախոսահամար
              </label>
              <Input
                type="tel"
                name="contact__tel"
                className={styles.contact__form__inputs}
                placeholder="+374"
              />
            </div>
          </div>
          <div className={styles.contact__form__inner}>
            <label
              htmlFor="contact__mail"
              className={styles.contact__form__label}
            >
              Էլ․ փոստ<span>*</span>
            </label>
            <Input
              type="email"
              id="contact__mail"
              name="contact__mail"
              className={styles.contact__form__inputs}
              placeholder="alinpoghosyan@gmail.com"
            />
          </div>
          <div className={styles.contact__form__inner}>
            <label
              htmlFor="contact__text"
              className={styles.contact__form__label}
            >
              Ի՞նչ է Ձեզ հետաքրքրում<span>*</span>
            </label>

            <textarea
              id="contact__message"
              name="contact__message"
              className={styles.contact__form__textarea}
              placeholder="Ի՞նչ է Ձեզ հետաքրքրում"
              defaultValue=""
            />
          </div>
          <Input
            type="submit"
            id="contact__submit"
            name="contact__submit"
            className={styles.contact__form__submit}
            value="Ուղղարկել"
          />
        </form>
        <div className={styles.contact__address}>
          <div className={styles.contact__address__map}>ACC</div>
          <div className={styles.contact__address__info}>
            <h3 className={styles.contact__address__info__header}>
              Կոնտակտներ
            </h3>
            <div className={styles.contact__address__info__routes}>
              <MailIcon />
              <span>info@acc-accountant.am</span>
            </div>
            <div className={styles.contact__address__info__routes}>
              <PhoneIcon />
              <span>+374 98 88 29 44, +374 44 06 06 19</span>
            </div>
            <div className={styles.contact__address__info__routes}>
              <LocationIcon />
              <span>ք․ Երևան, Բաղրամյան 75&#92;17</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>©2021 ACC ACCOUNTANT. All rights reserved.</p>
        <p>Powered by ShellLogix</p>
      </div>
    </div>
  );
};

export default ContactUsSection;
