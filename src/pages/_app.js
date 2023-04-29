import { ContainerWrapper } from "Container";
import Footer from "component/footer/Footer";
import Header from "component/header/Header";
import Layout from "component/layout";
import GlobalStyle from "style/global/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <ContainerWrapper>
          <Header />
      </ContainerWrapper>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}