import { Box } from '@chakra-ui/react';
import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';

function App() {
  return (
    <Box>
      <Banner />
      <Header />
      <Box height={'200vh'}></Box>
    </Box>
  );
}

export default App;
