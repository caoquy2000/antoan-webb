import React from "react";
import GlobalStyle from "style/global/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Header from "component/header/Header";
import { ContainerWrapper } from "Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            path={'/trangchu'}
            element={
              <Home />
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
