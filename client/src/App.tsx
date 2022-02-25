import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import ProductCardList from './components/ProductCardList';
import products from './lib/products';
function App() {
  const [state, setState] = useState({ ...products });
  return (
    <Box>
      <Banner />
      <Header />
      <ProductCardList products={state.products} />
    </Box>
  );
}

export default App;
