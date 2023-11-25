import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import css from './UserMenu.module.css';
import { useAuth } from 'hooks/useAuth';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        color="primary"
        size="small"
        variant="text"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
