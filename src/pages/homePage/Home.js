import "../../App.css";
import Layout from "../../components/Layout/mainLayout";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../components/resource/img/home/hero.png";
import HeroImageMid from "../../components/resource/img/home/hero-mid.png";
import HeroImage2 from "../../components/resource/img/home/hero2.png";
import Category2 from "../../components/resource/img/home/category2.jpeg";

import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import {
  getAllCategories,
  getMostSellingProducts,
  getNewProducts,
} from "../../api/api";
import { toArray } from "../../lib/toArray";
import Loader from "../../components/Loader/loader";

register();

function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [mostSelling, setMostSelling] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [loader, setLoader] = useState(false);

  const getCategories = () => {
    getAllCategories().then((data) => {
      setCategory(data?.data?.products);
    });
  };
  const getProducts = () => {
    getMostSellingProducts().then((data) => {
      localStorage.setItem("fee", data.data.businessInfo.deliveryFee);
      setMostSelling(toArray(data.data.productsObject));
    });
  };
  const getNewArrivalProducts = () => {
    getNewProducts().then((data) => {
      setNewArrival(toArray(data.data.productsObject));
      setLoader(false);
    });
  };

  useEffect(() => {
    setLoader(true);
    getCategories();
    getProducts();
    getNewArrivalProducts();
  }, []);
  return (
    <Layout>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={HeroImage} alt="library" className="centered-image" />
          <div className="content-wrapper ">
            <h1 className="centered-text">
              الكتاب نافذة نتطلع من خلالها إلى العالم.
            </h1>
            <h2 className="small-centered-text">
              ستجد الاف النوافذ المختلفة في متجرنا الإلكتروني
            </h2>
            <Button
              variant="outline-light mt-5"
              onClick={() => navigate("/books")}
            >
              تسوق الان
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className="categories-container p-5">
        <Row className="sliderRow">
          {loader ? (
            <Loader />
          ) : (
            <Swiper
              autoplay
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              dir="ltr"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {category.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="category-item"
                    onClick={() =>
                      navigate("/books", { state: ["category", item._id] })
                    }
                  >
                    <div>
                      <img
                        src={Category2}
                        alt={index}
                        className="section-img"
                      />
                    </div>

                    <p className="text-center">{item._id}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Row>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={HeroImageMid} alt="library" className="centered-image" />
          <div className="content-wrapper ">
            <h1 className="centered-text">الكتب الأكثر مبيعا</h1>
            <Button
              variant="outline-light mt-5"
              onClick={() => navigate("/books", { state: ["most", ""] })}
            >
              تسوق الان
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className="categories-container p-5">
        <Row className="sliderRow">
          {loader ? (
            <Loader />
          ) : (
            <Swiper
              autoplay
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              dir="ltr"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {mostSelling.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="mainContainerCard"
                    onClick={() => navigate("/product", { state: item })}
                  >
                    <div
                      className="discountSpan"
                      style={{
                        display:
                          item?.discount === 0 ||
                          item?.oldPrice < item?.mainPrice
                            ? "none"
                            : "block",
                      }}
                    >
                      {item?.discount > 0 ? `${item?.discount} %` : ""}
                    </div>
                    <div>
                      <img
                        src={item?.photo}
                        alt={item?.name?.en}
                        className="bookImages"
                      />
                    </div>
                    <div className="textDiv">
                      <p>{item?.name?.ar}</p>
                      <div className="priceDiv">
                        <p>{`د.أ ${item?.mainPrice}`}</p>
                        <strike
                          style={{
                            color: "red",
                            display:
                              item?.oldPrice === item?.mainPrice ||
                              item?.oldPrice < item?.mainPrice
                                ? "none"
                                : "block",
                          }}
                        >{`د.أ ${item?.oldPrice}`}</strike>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Row>
      </div>

      <div className="image-container">
        <div className="image-wrapper">
          <img src={HeroImage2} alt="library" className="centered-image" />
          <div className="content-wrapper ">
            <h1 className="centered-text">وصلنا حديثاً</h1>
            <Button
              variant="outline-light mt-5"
              onClick={() => navigate("/books", { state: ["new", ""] })}
            >
              تسوق الان
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className="categories-container p-5">
        <Row className="sliderRow">
          {loader ? (
            <Loader />
          ) : (
            <Swiper
              autoplay
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              dir="ltr"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {newArrival.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="mainContainerCard"
                    onClick={() => navigate("/product", { state: item })}
                  >
                    <div
                      className="discountSpan"
                      style={{
                        display:
                          item?.discount === 0 ||
                          item?.oldPrice < item?.mainPrice
                            ? "none"
                            : "block",
                      }}
                    >
                      {item?.discount > 0 ? `${item?.discount} %` : ""}
                    </div>
                    <div>
                      <img
                        src={item?.photo}
                        alt={item?.name?.en}
                        className="bookImages"
                      />
                    </div>
                    <div className="textDiv">
                      <p>{item?.name?.ar}</p>
                      <div className="priceDiv">
                        <p>{`د.أ ${item?.mainPrice}`}</p>
                        <strike
                          style={{
                            color: "red",
                            display:
                              item?.oldPrice === item?.mainPrice ||
                              item?.oldPrice < item?.mainPrice
                                ? "none"
                                : "block",
                          }}
                        >{`د.أ ${item?.oldPrice}`}</strike>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Row>
      </div>
    </Layout>
  );
}

export default Home;
