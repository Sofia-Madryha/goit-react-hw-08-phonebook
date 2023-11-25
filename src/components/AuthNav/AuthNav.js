import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Button, ButtonGroup } from '@mui/material';

export const AuthNav = () => {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button color='primary' size='small'><NavLink className={css.link} to="/register">
        Register
      </NavLink></Button>
  <Button><NavLink className={css.link} to="/login">
        Log In
      </NavLink></Button>
  
</ButtonGroup>
  )
};