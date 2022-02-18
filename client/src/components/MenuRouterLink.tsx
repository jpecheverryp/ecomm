import { MenuItem, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

interface MenuLinkProps {
  path: string;
  children: string;
}

const MenuRouterLink = ({ children, path }: MenuLinkProps) => {
  return (
    <Link as={RouterLink} to={path}>
      <MenuItem>{children}</MenuItem>
    </Link>
  );
};

export default MenuRouterLink;
