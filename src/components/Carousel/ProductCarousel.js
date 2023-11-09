import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './ProductCarousel.css'; // Import the custom CSS file

const ProductCarousel = ({ products }) => {
  const productGroups = [];
  for (let i = 0; i < products.length; i += 4) {
    productGroups.push(products.slice(i, i + 4));
  }

  return (
    <div className="product-carousel-container">
      <div className="product-carousel">
        <Carousel
          nextIcon={<span className="carousel-arrow round-arrow next" />}
          prevIcon={<span className="carousel-arrow round-arrow prev" /> /* arrow styles */}
        >
          {productGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                {group.map((item, i) => (
                  <div key={i} className="col-md-3 p-4" >
                    <Card className='p-2'>
                      <Card.Img src={item.image} alt={item.name} height="150px" className='px-5' />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{`Price: $${item.price}`}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;