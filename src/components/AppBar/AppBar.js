import { Navigation } from '../Navigation/Navigation';

import css from './AppBar.module.css';
import { UserMenu } from 'components/UserMenu.js/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
