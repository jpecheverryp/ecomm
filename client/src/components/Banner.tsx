import { Box, Link, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

const Banner = () => {
  return (
    <Box bg={'black'} color={'white'} textAlign='center' p={3}>
      This is a learning project{' '}
      <Link
        href='https://github.com/jpecheverryp/ecomm'
        target={'_blank'}
        color={'orange.200'}
      >
        check out the source code <Icon as={FaGithub} />
      </Link>
    </Box>
  );
};

export default Banner;
