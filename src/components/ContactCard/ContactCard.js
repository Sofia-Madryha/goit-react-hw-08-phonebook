import { Delete} from '@mui/icons-material';
import {IconButton, List, ListItem, ListItemText } from '@mui/material';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactCard = ({ contactInfo: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary={name} secondary={number} />
        <IconButton
          aria-label="delete"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <Delete color="primary" />
        </IconButton>
      </ListItem>
    </List>
  );
};
