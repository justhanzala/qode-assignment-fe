import dotenv from "dotenv";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";

dotenv.config();

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
