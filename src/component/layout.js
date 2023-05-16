import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import StyledComponentsRegistry from "./registry";
import { ContainerWrapper } from "Container";
import Footer from "component/footer/Footer";
import Header from "component/header/Header";
import GlobalStyle from "style/global/GlobalStyle";
import ButtonSocial from "./button-social/ButtonSocial";

export default function Layout({ children }) {
    return (
      <>
        <GlobalStyle />
        <ContainerWrapper>
            <Header />
        </ContainerWrapper>
            {children}
        <ButtonSocial />
        <Footer />
      </>
    )
  }