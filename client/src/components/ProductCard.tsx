import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { parsePrice } from '../lib/formatPrice';

interface IProps {
  product: {
    productName: string;
    priceInCents: number;
  };
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Box>
      <Img w={'100%'} mx={'auto'} src='https://via.placeholder.com/200x250' />
      <Text color={'#222'}>{product.productName}</Text>
      <Text color={'#222'}>{parsePrice(product.priceInCents)}</Text>
    </Box>
  );
};

export default ProductCard;
