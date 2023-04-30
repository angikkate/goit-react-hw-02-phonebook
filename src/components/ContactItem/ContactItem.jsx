import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <div className={css.item}>
      <p className={css.name}>{name}:</p>
      <p className={css.number}>{number}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
        aria-label="delete contact"
      >
        Delete
      </button>
  </div>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;