
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filter';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 2px;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const Button = styled.button`
  font-size: 1.6rem;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: background-color 0.3s ease;
  margin-left: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const handleClearFilter = () => {
    dispatch(setFilter(''));
  };

  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        placeholder="Search contacts by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <Button onClick={handleClearFilter}>Clear</Button>
    </FilterContainer>
  );
};
