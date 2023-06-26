
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete();
    Notiflix.Notify.warning(`${name} has been removed from contacts.`);
  };

  return (
    <div
      style={{
        borderBottom: '1px solid #E2E8F0',
        padding: '8px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ fontWeight: 'bold' }}>
        {name}: {number}
      </span>
      <button
        style={{
          backgroundColor: '#FF4C4C',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
