import styled from 'styled-components'

export const Screen = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  z-index: 2;
  background: #000000cc;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  color: #333;
  width: 90%;
  max-width: 300px;
  border-radius: 10px;
  padding: 30px 20px;
  margin-top: -100px;

  button {
    margin: 0 auto;
  }

  @media (max-width: 300px) {
    transition: padding .5s;
    padding: 30px 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  width: 100%;
  max-width: 400px;
  margin: 10px 0 0;
`;

export const Avatar = styled.label`
  position: relative;

  height: 100px;
  width: 100px;
  margin: 0 auto 15px;
  cursor: pointer;

  input[type=file] {
    display: none;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 30px;
    width: 30px;
    background: #1976d2;
    border-radius: 50%;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;