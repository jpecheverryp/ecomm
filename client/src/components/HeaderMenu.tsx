import { Box, IconButton } from '@chakra-ui/react';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import React from 'react';
const handleSearch = () => {
  console.log('search');
};
const redirectToBag = () => {
  console.log('shopping bag');
};
const redirectToLogin = () => {
  console.log('login');
};
const HeaderMenu = () => {
  return (
    <Box
      display={'flex'}
      flex={1}
      mr={'auto'}
      justifyContent={'flex-end'}
      gap={1}
    >
      <IconButton
        aria-label='search'
        onClick={handleSearch}
        icon={<FaSearch />}
      />
      <IconButton
        aria-label='login'
        onClick={redirectToLogin}
        icon={<FaUser />}
      />
      <IconButton
        aria-label='shopping bag'
        onClick={redirectToBag}
        icon={<FaShoppingBag />}
      />
    </Box>
  );
};

export default HeaderMenu;
