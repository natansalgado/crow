import styled from 'styled-components'


export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #1DA1F2;
  color: white;
  padding: 0 10%;
  width: 100%;
  gap: 20px;
  z-index: 1;
`;

export const Label = styled.label`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 5px 10px;
  width: 80%;
  max-width: 250px;
  outline: 1px solid #777;

  &:focus-within {
    outline: 1px solid #333;
  }

  &:hover {
    outline: 1px solid #333;
  }

  input {
    height: 100%;
    border: none;
    background-color: transparent;
    margin-left: 5px;
    font-size: 16px;
    color: #333;
    outline: none;
    width: 100%;
  }
`;


