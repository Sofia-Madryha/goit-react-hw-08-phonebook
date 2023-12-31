import { TextField } from '@mui/material';
import { useDispatch} from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';



export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter =>  dispatch(setFilter(filter));


  return (
    <div>
      <TextField
      id="outlined-basic" label="Find by name" variant="outlined" size="small" margin="dense"
        type="text"
        onChange={evt => handleFilterChange(evt.target.value)}
      />
    </div>
  );
};
