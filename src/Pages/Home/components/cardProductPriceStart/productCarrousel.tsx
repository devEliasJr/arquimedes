import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReusableProductCard from './cardProductPriceStart';

interface Product {
  name: string;
  image: string;
  rating: number;
  price: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  return (
    <Box bgcolor="white" my={4}>
      <Slider {...settings}>
        {products.map((item, index) => (
          <Box key={index} p={2}>
            <ReusableProductCard
              name={item.name}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
