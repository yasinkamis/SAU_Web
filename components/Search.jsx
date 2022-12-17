import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

const Search = () => {
  return (
    <Input className="input-group mb-3">
      <InputArea
        type="text"
        className="form-control py-1 px-2"
        placeholder="Arama Yap"
        aria-label="Arama Yap"
        aria-describedby="button-addon2"
      />
      <InputButton
        className="btn btn-outline-secondary py-1 px-2 d-flex justify-content-center align-items-center"
        type="button"
        id="button-addon2"
      >
        <MdSearch />
      </InputButton>
    </Input>
  );
};

export default Search;

const Input = styled.div`
  position: relative;
  display: flex !important;
  width: 300px;
  height: 30px;
  input:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

const InputButton = styled.button`
  background-color: #004884;
  color: white;
  border-color: transparent;
  height: 30px;
  &:hover {
    background-color: #4883b3;
    border-color: #004884;
  }
`;

const InputArea = styled.input`
  border-color: #004884;
  height: 30px;
`;
