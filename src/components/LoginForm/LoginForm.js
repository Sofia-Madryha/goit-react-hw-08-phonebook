import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

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
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-password-input"
          label="Login"
          type="email"
          name="email"
          autoComplete="current-password"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
        <Button size="large" variant="contained" type="submit">Log In</Button>
      </div>
    </Box>
  );
};
