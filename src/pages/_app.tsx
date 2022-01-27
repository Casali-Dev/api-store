import type { AppProps } from "next/app";
import Header from "../components/Header";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import light from "../styles/themes/light";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
