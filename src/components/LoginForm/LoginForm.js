import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button, TextField } from '@mui/material';
// import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();
  // const { ref, ...rest } = register('name', { required: true }, 'password', {
  //   required: true,
  //   minLength: 4,
  // });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <TextField
          id="outlined-password-input"
          label="Login"
          type="text"
          name="email"
          // autoComplete="current-password"

 />
      </label>

      <label className={css.label}>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          className="input-field"
     
        />

        
      </label>
      <Button variant="outlined" type="submit">
        Log In
      </Button>
    </form>
  );
};
