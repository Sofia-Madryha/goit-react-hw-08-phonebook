import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css  from './Contacts.module.css';
import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from '../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>

      <div className={css.container}>
        <Filter />

        <ContactList />
      </div>
    </div>
  );
}
