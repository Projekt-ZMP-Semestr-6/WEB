import { Outlet } from 'react-router-dom';
import styles from '@styles/components/Layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.test}>
      <Outlet />
    </main>
  );
};

export default Layout;
