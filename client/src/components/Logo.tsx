import { Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Logo = () => {
  return (
    <Link as={RouterLink} to='/'>
      <Heading fontFamily={' serif'} as='h1' px={2} py={1}>
        Tauro
      </Heading>
    </Link>
  );
};

export default Logo;
