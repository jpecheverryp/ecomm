import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductCardList from './components/ProductCardList';

function App() {
  const [state, setState] = useState({
    products: [{}, {}, {}, {}],
  });
  return (
    <Box>
      <Banner />
      <Header />
      <ProductCardList products={state.products} />
    </Box>
  );
}

export default App;
