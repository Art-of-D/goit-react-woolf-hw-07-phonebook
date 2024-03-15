import { useDispatch, useSelector } from 'react-redux';
import { PhonebookFilter } from './Filter.styled';
import { getFilter } from 'reduxStore/filter/selectors';
import { addFilter } from 'reduxStore/filter/filterSlice';

export const Filter = () => {
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };

  return (
    <PhonebookFilter>
      <label htmlFor="find-contact">Find contacts by name</label>
      <input
        type="text"
        name="find-contact"
        id="find-contact"
        value={filter}
        onChange={handleFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(['\s\-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ></input>
    </PhonebookFilter>
  );
};
