import { Flex } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      w={'100%'}
      outline='red solid 1px'
    >
      <Navbar />
      <Logo />
      <div>Menu</div>
    </Flex>
  );
};

export default Header;
