import { Box } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  product: {};
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return <Box bg={'red'}>ProductCard</Box>;
};

export default ProductCard;
