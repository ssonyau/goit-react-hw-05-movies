import styled from 'styled-components';

export const InputSearch = styled.input`
  font-size: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: solid 1px rgb(0, 1, 0, 0.24);
  border-radius: 7px;
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: solid 1px rgb(0, 1, 0, 0.24);

  :active {
    background-color: orange;
  }
`;
