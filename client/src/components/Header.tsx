import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      w={'100%'}
      outline='red solid 1px'
    >
      <div>Nav</div>
      <Logo />
      <div>Menu</div>
    </Flex>
  );
};

export default Header;
