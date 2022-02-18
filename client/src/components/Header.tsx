import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Box as='header' position={'sticky'} w={'100%'} top={0}>
      <Container
        display={'flex'}
        pt={3}
        pb={2}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        w={'100%'}
        outline='red solid 1px'
      >
        <Navbar />
        <Logo />
        <div>Menu</div>
      </Container>
    </Box>
  );
};

export default Header;
