import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: #ebebf1;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  .App {
    padding-bottom: 10px;

    /* .time-line {
      display: flex;
      flex-direction: column;
    } */

    .not-found {
      color: #333;
      text-align: center;
    }
  }
`