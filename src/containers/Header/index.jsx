import React, { useContext } from 'react';

import { ScrollView } from 'components/index';
import { I18nContext } from 'context/index';
import { navigationList } from 'utils/index';

import styles from './Header.scss';

import { LogoIcon, BurgerIcon } from '../../icons';

const HeaderContainer = () => {
  const t = useContext(I18nContext);

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
        </nav>
      </div>
    </header>
  );
};

export default HeaderContainer;
