import { Container, Grid } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './ProductCard';

interface iProps {
  products: {
    productName: string;
    priceInCents: number;
  }[];
}

const ProductCardList: React.FC<iProps> = ({ products }) => {
  return (
    <Container maxW={'80%'} my={7}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        rowGap={8}
        columnGap={6}
      >
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCardList;
