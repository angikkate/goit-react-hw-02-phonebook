import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.itemList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <ContactItem
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;