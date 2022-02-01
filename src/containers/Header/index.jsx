import React, { useContext } from 'react';
import Cookies from 'js-cookie';

import { LanguageDrop, ScrollView } from 'components/index';
import { I18nContext } from 'context/index';
import { navigationList, languageList } from 'utils/index';

import styles from './Header.scss';

import { i18n } from '../../../i18n';
import { LogoIcon, BurgerIcon } from '../../icons';

const HeaderContainer = () => {
  const t = useContext(I18nContext);
  const defaultLang = Cookies.get('next-i18next');

  const handleFlags = (code) => {
    i18n.changeLanguage(code);
  };
  const renderNavigationLinks = navigationList.map(({ id, name, link }) => (
    <ScrollView key={id} link={link} className={styles.nav__item}>
      {t(name)}
    </ScrollView>
  ));

  return (
    <header className={styles.container}>
      <div className={`container ${styles.wrapper}`}>
        <LogoIcon />
        <nav className={styles.nav}>
          {renderNavigationLinks}
          <BurgerIcon className={styles.burger} />
          <LanguageDrop
            data={languageList}
            handleFlags={handleFlags}
            defaultLang={defaultLang}
          />
        </nav>
      </div>
    </header>
  );
};

export default HeaderContainer;
