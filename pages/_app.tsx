import { AppProps } from "next/app";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import { wrapper } from "../store";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default wrapper.withRedux(app);
