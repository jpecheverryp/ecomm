import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  Button,
  Icon,
  MenuList,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import React from 'react';
import NavRouterLink from './NavRouterLink';

const Navbar = () => {
  return (
    <Box>
      <Box display={{ base: 'none', md: 'flex' }} flexWrap={'wrap'}>
        <NavRouterLink path={'/women'}>Women</NavRouterLink>
        <NavRouterLink path={'/men'}>Men</NavRouterLink>
        <NavRouterLink path={'/kids'}>Kids</NavRouterLink>
        <NavRouterLink path={'/accesories'}>Accesories</NavRouterLink>
        <NavRouterLink path={'/shoes'}>Shoes</NavRouterLink>
      </Box>
      <Box display={{ base: 'inline-block', md: 'none' }}>
        <Menu>
          <MenuButton as={Button}>
            <Icon as={FaBars} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavRouterLink path={'/women'}>Women</NavRouterLink>
            </MenuItem>
            <MenuItem>
              <NavRouterLink path={'/men'}>Men</NavRouterLink>
            </MenuItem>
            <MenuItem>
              <NavRouterLink path={'/kids'}>Kids</NavRouterLink>
            </MenuItem>
            <MenuItem>
              <NavRouterLink path={'/accesories'}>Accesories</NavRouterLink>
            </MenuItem>
            <MenuItem>
              <NavRouterLink path={'/shoes'}>Shoes</NavRouterLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
