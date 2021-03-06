import {
  Box,
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import React from 'react';
import NavRouterLink from './NavRouterLink';
import MenuRouterLink from './MenuRouterLink';

const Navbar = () => {
  return (
    <Box ml={'auto'} flex={1}>
      <Box display={{ base: 'none', md: 'flex' }} flexWrap={'wrap'}>
        <NavRouterLink path={'/women'}>Women</NavRouterLink>
        <NavRouterLink path={'/men'}>Men</NavRouterLink>
        <NavRouterLink path={'/shoes'}>Shoes</NavRouterLink>
      </Box>
      <Box display={{ base: 'inline-block', md: 'none' }}>
        <Menu>
          <MenuButton as={Button}>
            <Icon as={FaBars} />
          </MenuButton>
          <MenuList>
            <MenuRouterLink path={'/women'}>Women</MenuRouterLink>
            <MenuRouterLink path={'/men'}>Men</MenuRouterLink>
            <MenuRouterLink path={'/shoes'}>Shoes</MenuRouterLink>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
