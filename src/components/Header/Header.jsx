import styles from './Header.module.css';

import igniteLogo from '../../assets/ignite_logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}