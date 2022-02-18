import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Box as='header' position={'sticky'} w={'100%'} top={0}>
      <Container
        display={'flex'}
        pt={3}
        pb={2}
        justifyContent={'center'}
        alignItems={'center'}
        flexWrap={'wrap'}
        w={'100%'}
        bg={'brand.100'}
        zIndex={1}
      >
        <Navbar />
        <Logo />
        <HeaderMenu />
      </Container>
    </Box>
  );
};

export default Header;
