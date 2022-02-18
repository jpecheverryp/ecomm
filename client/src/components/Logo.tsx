import { Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Logo = () => {
  return (
    <Link as={RouterLink} to='/' width={'auto'} flex={1}>
      <Heading fontFamily={' serif'} as='h1' textAlign={'center'}>
        Tauro
      </Heading>
    </Link>
  );
};

export default Logo;
