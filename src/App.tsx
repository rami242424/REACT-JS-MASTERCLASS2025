import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  body {
    color : rebeccapurple;
  }
`;

function App(){
  return(
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;