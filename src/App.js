import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./commons/styles/global-style";

function App() {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <div>Teste</div>
    </ChakraProvider>
  );
}

export default App;
