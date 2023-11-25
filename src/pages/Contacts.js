import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
    
        <title>Your Contacts</title>
 
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </div>
  );
}