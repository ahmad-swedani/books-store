/* eslint-disable react-hooks/exhaustive-deps */
import "../../App.css";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Layout from "../../components/Layout/mainLayout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { getOrdersByUserId } from "../../api/api";
import { useState } from "react";
import DetailsModal from "./DetailsModal";

function Orders() {
  const navigate = useNavigate();
  const [ordersValue, setOrders] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  useEffect(() => {
    if (cookie.load("token")) {
      let decodedToken = jwtDecode(cookie.load("token"));

      getOrdersByUserId(decodedToken.id).then((res) => {
        console.log("DATA :", res);
        setOrders(res?.data?.orders);
      });
    } else {
      navigate("/");
    }
  }, []);
  return (
    <Layout>
      <Container className="d-none d-lg-block">
        <Row>
          <Col xs={12} className="tableColumn">
            <table className="table table-striped border">
              <thead>
                <tr>
                  <th scope="col">جميع المعلومات</th>
                  <th scope="col">حالة الطلب</th>
                  <th scope="col">اسم المستلم</th>
                  <th scope="col">رقم الهاتف</th>
                  <th scope="col">السعر</th>
                  <th scope="col">رقم الطلب</th>
                </tr>
              </thead>
              <tbody>
                {ordersValue.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <Button
                        variant="outline-success"
                        onClick={() => {
                          setModalShow(true);
                          setSelectedOrder(item);
                        }}
                      >
                        جميع المعلومات
                      </Button>
                    </td>
                    <td>{item.state}</td>
                    <td>{item?.deliveryData?.recipentName}</td>
                    <td>{item?.deliveryData?.phoneNumber}</td>
                    <td>{item.total} د.أ</td>
                    <td>{item.orderNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <Container className="d-block d-lg-none mt-3">
        <Row>
          {ordersValue.map((item, idx) => (
            <Col xs={12} className="cardsOrders mb-2">
              <Card
                bg="info"
                key={idx}
                text="text"
                style={{ width: "18rem", color: "white", cursor: "pointer" }}
                className="mb-2"
                onClick={() => {
                  setModalShow(true);
                  setSelectedOrder(item);
                }}
              >
                <Card.Header>رقم الطلب : {item.orderNumber}</Card.Header>
                <Card.Body>
                  <Card.Title> حالة الطلب : {item.state} </Card.Title>
                  <Card.Text>
                    <p>اسم المستلم : {item?.deliveryData?.recipentName}</p>
                    <p>السعر : {item.total} د.أ</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <DetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={selectedOrder}
      />
    </Layout>
  );
}

export default Orders;
