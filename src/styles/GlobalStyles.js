import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --bg: #121212;
    --white: #fff;
    --gray: #888888;
    --text: #8c8c8c;
    --blue: #2F89FC
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  overflow-x: hidden;
}
body{
    font-size: 20px;
    line-height: 1.5;
    overflow-x: hidden;
    width: 100vw;
    color: var(--text);
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg);
}
a {
    text-decoration: none;
  }
ul {
    list-style: none;
  }
input{
  outline: none;
  border: 0;
}
.container{
  max-width: 90rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: 2rem 7.5rem;
  @media(max-width: 1024px) {
    padding: 1.5rem 3rem;
  }
}
`