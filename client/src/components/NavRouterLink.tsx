import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

interface NavLinkProps {
  path: string;
  children: string;
}
const NavRouterLink = ({ children, path }: NavLinkProps) => {
  return (
    <Link as={RouterLink} to={path}>
      {children}
    </Link>
  );
};

export default NavRouterLink;
