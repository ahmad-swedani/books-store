/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "../../App.css";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Layout from "../../components/Layout/mainLayout";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import ProductStart1 from "../../components/resource/img/home/carousel1-product1.jpg";
import { useEffect } from "react";
import {
  getAllProducts,
  getByCategory,
  getMostSellingProducts,
  getNewProducts,
} from "../../api/api";
import { useState } from "react";
import { toArray } from "../../lib/toArray";
import Loader from "../../components/Loader/loader";

function Books() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [showingData, setShowingData] = useState([]);
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);

  const getProducts = () => {
    getAllProducts().then((data) => {
      let books = Object.keys(data.data.productsObject);
      let arrayOfBooks = books
        .filter(function (userName) {
          return !data.data.productsObject[userName].unique;
        })
        .map(function (userName) {
          return data.data.productsObject[userName];
        });
      setData(arrayOfBooks);
      if (location.state) {
        if (location.state[0] === "category") {
          getByCategory(location.state[1]).then((data) => {
            setTitle(location.state[1]);
            setShowingData(toArray(data.data.productsObject));
            setLoader(false);
          });
        } else if (location.state[0] === "most") {
          getMostSellingProducts().then((data) => {
            setTitle("الأكثر مبيعا");
            setShowingData(toArray(data.data.productsObject));
            setLoader(false);
          });
        } else if (location.state[0] === "new") {
          getNewProducts().then((data) => {
            setTitle("وصل حديثا");
            setShowingData(toArray(data.data.productsObject));
            setLoader(false);
          });
        } else if (location.state[0] === "search") {
          getNewProducts().then((data) => {
            setTitle(`نتائج البحث عن :${location.state[1]}`);
            let searchArray = [];
            arrayOfBooks.forEach((item) => {
              if (
                item?.name?.ar
                  .toLowerCase()
                  .includes(location.state[1].toLowerCase()) ||
                item?.name?.en
                  .toLowerCase()
                  .includes(location.state[1].toLowerCase()) ||
                item?.category
                  .toLowerCase()
                  .includes(location.state[1].toLowerCase()) ||
                item?.author?.name?.ar
                  .toLowerCase()
                  .includes(location.state[1].toLowerCase()) ||
                item?.author?.name?.en
                  .toLowerCase()
                  .includes(location.state[1].toLowerCase())
              ) {
                searchArray.push(item);
              }
            });
            setShowingData(searchArray);
            setLoader(false);
          });
        }
      } else {
        setShowingData(arrayOfBooks);
        setLoader(false);
      }
    });
  };
  useEffect(() => {
    setLoader(true);
    getProducts();
  }, [location.state]);

  return (
    <Layout>
      {loader ? (
        <Loader />
      ) : (
        <>
          <h3>{title}</h3>
          <Container>
            <Row>
              {showingData.map((item, index) => (
                <Col xs={6} md={6} lg={6} xl={3} key={index}>
                  <div
                    className="category-item border mt-1"
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
                    <img
                      src={item?.photo || ProductStart1}
                      alt={item?.name?.en}
                      // className="section-img"
                      style={{ width: "90%", height: "250px" }}
                    />
                    <p className="text-center">{item?.name?.ar}</p>
                    <div className="priceDivBooks">
                      <strike
                        className="text-center"
                        style={{
                          color: "red",
                          display:
                            item?.oldPrice === item?.mainPrice ||
                              item?.oldPrice < item?.mainPrice
                              ? "none"
                              : "block",
                        }}
                      >
                        {item?.oldPrice} د.أ
                      </strike>
                      <p className="text-center">{item?.mainPrice} د.أ</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </Layout>
  );
}

export default Books;
