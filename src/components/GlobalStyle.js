import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0 ; 
    box-sizing: border-box
  }
  body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;

  }
  button{
    font-family: inherit;
    font-weight: bold;
    font-size: 1.1rem ;
    cursor: pointer; 
    padding: 1rem 2rem; 
    border: 3px solid #23d997; 
    color: #fff; 
    background: transparent;
    transition: .2s ease;
    &:hover{
      background: #23d997
    }

  }
  h2{
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: #fff
  }
  h4 {
    font-weight: bold;   
    font-size: 2rem
  }
  a{
    font-size: 1.1rem;
  }
  span {
    font-weight: bold;
    color: #23d997
  }
  p{
    padding: 3rem 0rem ;
    color: #ccc; 
    font-size: 1.4rem;
    line-height: 150%;
  }
  .scroll-progress{
    position: fixed;
    z-index: 100;
    background: #23d997;
    transition: .1s ease;
    width:  100%;
    height: 6px;
    left: 0; 
    top: 0;
    transform-origin: left  top;
  }
  .crow-svg{
    width: 500px;
    opacity: 0.4;
  }
`;

export default GlobalStyle;
