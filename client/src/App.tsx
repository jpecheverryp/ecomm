import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Banner from './components/Banner';

function App() {
  return (
    <Box>
      <Banner />
      <Heading>ecommerce</Heading>
      <Box height={'200vh'}></Box>
    </Box>
  );
}

export default App;
