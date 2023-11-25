import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { selectContacts } from 'redux/contacts/selectors';
import * as Yup from 'yup';

const contactSchema = Yup.object({
  name: Yup.string('Enter your email').required('Name is required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{3}$/, 'Must be in format: 000-000-000')
    .required('This field is required, please fill it'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = value => {
    console.log(value);
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );
    if (nameExists) {
      alert(`${value.name}' is already in contacts.`);
    } else {
      console.log(addContact(value));
      dispatch(addContact(value));
    }
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: contactSchema,
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
  });

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="Standard"
          variant="standard"
          name="name"
          type="text"
          required
          placeholder="Jacob Mecker"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          name="number"
          label="Number"
          type="tel"
          value={formik.values.number}
          placeholder="000-000-000"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};
