import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Sản Phẩm' data={productData} />
      <Feature />
      <Products heading='Đông trùng hạ thảo ' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
