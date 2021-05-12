import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/menu";
import DataMenu, { productData1, productDataTwos } from "./components/Menu/dataMenu";


function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <Switch>
        {/* <Route path="/about" component={About} /> */}
        <Route path="/menu" component={DataMenu} />
        <Hero />
      <Products heading="Sản Phẩm" data={productData} />
      <Feature />
      <Products heading="Đông trùng hạ thảo " data={productDataTwo} />
      <Footer />        {/* <Route path="/" exact component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
