import './App.css';
import Layout from './components/Layout/mainLayout';
import ProductCarousel from './components/Carousel/ProductCarousel';
import WrappedMap from './components/Maps/MapWithMarker'; // Correct import path
import 'react-tabs/style/react-tabs.css';
import HeroImage from './components/resource/img/home/hero.png';
import HeroImageMid from './components/resource/img/home/hero-mid.png';
import HeroImage2 from './components/resource/img/home/hero2.png';
import Category1 from './components/resource/img/home/category1.jpeg';
import Category2 from './components/resource/img/home/category2.jpeg';
import Category3 from './components/resource/img/home/category3.jpeg';
import Category4 from './components/resource/img/home/category4.jpeg';
import ProductStart1 from './components/resource/img/home/carousel1-product1.jpg';
import ProductStart2 from './components/resource/img/home/carousel1-product2.jpg';
import ProductStart3 from './components/resource/img/home/carousel1-product3.jpg';
import ProductStart4 from './components/resource/img/home/carousel1-product4.jpg';
import ProductStart5 from './components/resource/img/home/carousel1-product5.jpg';
import ProductStart6 from './components/resource/img/home/carousel1-product6.jpg';
import ProductStart7 from './components/resource/img/home/carousel1-product7.jpg';
import ProductStart8 from './components/resource/img/home/carousel1-product8.jpg';
import ProductEnd1 from './components/resource/img/home/carousel2-product1.jpg';
import ProductEnd2 from './components/resource/img/home/carousel2-product2.jpg';
import ProductEnd3 from './components/resource/img/home/carousel2-product3.jpg';
import ProductEnd4 from './components/resource/img/home/carousel2-product4.jpg';
import ProductEnd5 from './components/resource/img/home/carousel2-product5.jpg';
import ProductEnd6 from './components/resource/img/home/carousel2-product6.jpg';
import ProductEnd7 from './components/resource/img/home/carousel2-product7.jpg';
import ProductEnd8 from './components/resource/img/home/carousel2-product8.jpg';

import React from 'react';
import { useState } from 'react';
import { Button, Row, Col, Image } from 'react-bootstrap';

function App() {
  const [category, setCategory] = useState([
    { image: Category4, label: "اكسسوارات" },
    { image: Category2, label: "اطفال" },
    { image: Category3, label: "انجليزي" },
    { image: Category4, label: "عربي" }
  ]);

  const products = [
    { name: 'منتج 1', price: 19.99, image: ProductStart1 },
    { name: 'منتج 2', price: 24.99, image: ProductStart2 },
    { name: 'منتج 3', price: 29.99, image: ProductStart3 },
    { name: 'منتج 4', price: 14.99, image: ProductStart4 },
    { name: 'منتج 5', price: 19.99, image: ProductStart5 },
    { name: 'منتج 6', price: 24.99, image: ProductStart6 },
    { name: 'منتج 7', price: 29.99, image: ProductStart7 },
    { name: 'منتج 8', price: 14.99, image: ProductStart8 }
  ];
  const productsEnd = [
    { name: 'منتج 1', price: 19.99, image: ProductEnd1 },
    { name: 'منتج 2', price: 24.99, image: ProductEnd2 },
    { name: 'منتج 3', price: 29.99, image: ProductEnd3 },
    { name: 'منتج 4', price: 14.99, image: ProductEnd4 },
    { name: 'منتج 5', price: 19.99, image: ProductEnd5 },
    { name: 'منتج 6', price: 24.99, image: ProductEnd6 },
    { name: 'منتج 7', price: 29.99, image: ProductEnd7 },
    { name: 'منتج 8', price: 14.99, image: ProductEnd8 }
  ];

  const markerLat = 32.532167;
  const markerLng = 35.853448;

  return (
    <div className="App" dir="rtl">
      <Layout>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={HeroImage} alt="library" className="centered-image" />
            <div className="content-wrapper ">
              <h1 className="centered-text">الكتاب نافذة نتطلع من خلالها إلى العالم.</h1>
              <h2 className="small-centered-text">ستجد الاف النوافذ المختلفة في متجرنا الإلكتروني</h2>
            </div>
          </div>
        </div>
        <div className="categories-container p-5">
          <Row>
            {category.map((item, index) => (
              <Col xs={6} md={6} lg={6} xl={3} key={index}>
                <div className="category-item">
                  <Image
                    src={item.image}
                    alt={index}
                    className="section-img"
                  />
                  <p className="text-center">{item.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={HeroImageMid} alt="library" className="centered-image" />
            <div className="content-wrapper ">
              <h1 className="centered-text">الكتب الأكثر مبيعا</h1>
              <Button variant="outline-light mt-5">تسوق الان</Button>{' '}
            </div>
          </div>
        </div>
        <ProductCarousel products={products} />
        <div className="image-container">
          <div className="image-wrapper">
            <img src={HeroImage2} alt="library" className="centered-image" />
            <div className="content-wrapper ">ProductCarousel
              <h1 className="centered-text">وصلنا حديثاً</h1>
              <Button variant="outline-light mt-5">تسوق الان</Button>{' '}
            </div>
          </div>
        </div>
        <ProductCarousel products={productsEnd} />

        {/* <div class="map">
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108322.67312994263!2d35.913728!3d31.958630399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sjo!4v1699135026975!5m2!1sar!2sjo" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}

        <div class="map">
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2875.2202311553797!2d35.85325074614916!3d32.53188071840253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1699505350033!5m2!1sen!2sjo" width="1440" height="800" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* <div style={{ width: '600px', height: '450px' }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            lat={markerLat}
            lng={markerLng}
          />
        </div> */}
      </Layout>
    </div>
  );
}

export default App;
