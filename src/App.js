import React from "react";
import GlobalStyle from "style/global/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Header from "component/header/Header";
import { ContainerWrapper } from "Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "component/footer/Footer";
import Service from "pages/Service";
import Recruitment from "pages/Recruitment";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <ContainerWrapper>
          <Header />
        </ContainerWrapper>
        <Routes>
          <Route 
            key={'home'}
            path={'/trang-chu'}
            element={
              <Home />
            }
          />
          <Route 
            key={'service'}
            path={'/dich-vu'}
            element={
              <Service />
            }
          />
          <Route 
            key={'recruitment'}
            path={'/tuyen-dung'}
            element={
              <Recruitment />
            }
          />
          <Route 
            key={'servicedetail'}
            path={'/chi-tiet-dich-vu'}
            element={
              <Recruitment />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
