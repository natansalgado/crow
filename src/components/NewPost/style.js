import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 10px auto;
  padding: 20px 16px 10px;
  max-width: 500px;

  color: #333;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border-bottom: 1px solid #e6ecf0;

  svg {
    cursor: pointer;
    font-size: 24px;
    margin-right: 5px;

    &:hover {
    color: #0070a0;
  }
  }
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  cursor: pointer;

`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
`

export const Input = styled.input`
  display: none;
`

export const Image = styled.img`
  max-height: 400px;
  max-width: 100%;
  object-fit: fill;
  margin-top: 10px;
  border-radius: 10px;
`

export const TextField2 = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 10px;
  
    &.Mui-focused fieldset {
      border: #333 solid 1px;
    }
  }
`;