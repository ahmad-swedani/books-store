import "react-tabs/style/react-tabs.css";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";

const cities = [
  "عمّان",
  "إربد",
  "الزرقاء",
  "المفرق",
  "عجلون",
  "جرش",
  "مأدبا",
  "البلقاء",
  "الكرك",
  "الطفيلة",
  "معان",
  "العقبة",
  "الأزرق",
];

function OrderDetails(props) {
  const [deliveryFee, setDeliveryFee] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("fee")) {
        setDeliveryFee(Number(localStorage.getItem("fee")));
      }
  }, []);

  return (
    <Container className="mainContainer">
      <Row>
        <Col xs={12}>
          <div className="columnOne">
            <div className="tableHeader">
              <p>المنتج</p>
              <p>العدد</p>
              <p>المجموع</p>
            </div>
            {props?.data?.items.map((item, index) => (
              <div className="tableBody">
                <div className="imgDiv">
                  <img
                    src={item?.product?.item?.photo}
                    alt="img"
                    className="bookImage"
                  />
                  <p>{item?.product?.item?.name?.ar}</p>
                  <p>{item?.product?.item?.mainPrice} د.أ</p>
                </div>
                <div className="counterDiv">
                  <p>{item?.product?.quantity}</p>
                </div>
                <div className="priceDiv">
                  <p>
                    {item?.product?.item?.mainPrice * item?.product?.quantity}{" "}
                    د.أ
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className="formDiv">
            <h3>معلومات الإستلام</h3>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>الإسم</Form.Label>
                <Form.Control
                  type="text"
                  value={props?.data?.deliveryData?.recipentName}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="number">
                <Form.Label>رقم الهاتف</Form.Label>
                <Form.Control
                  style={{ textAlign: "right" }}
                  type="tel"
                  value={props?.data?.deliveryData?.phoneNumber}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="country">
                <Form.Label>البلد</Form.Label>
                <Form.Control type="text" disabled value="الأردن" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>المدينة</Form.Label>
                <Form.Select disabled value={props?.data?.deliveryData?.city}>
                  {cities.map((item, idx) => (
                    <option value={item}>{item}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>العنوان</Form.Label>
                <Form.Control
                  type="text"
                  disabled value={props?.data?.deliveryData?.addriss}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="notes">
                <Form.Label>ملاحظات</Form.Label>
                <Form.Control
                  type="text"
                  disabled value={props?.data?.deliveryData?.notes}
                />
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className="orderDetails">
            <h3>تفاصيل الطلب</h3>
            <div className="info">
              <p>المجموع الفرعي</p>
              <p>{props?.data?.total} د.أ</p>
            </div>
            <div className="info">
              <p>التوصيل</p>
              <p>{deliveryFee} د.أ</p>
            </div>
            <div className="info">
              <p>المجموع الكلي</p>
              <p>{props?.data?.total + deliveryFee} د.أ</p>
            </div>
            <div className="way">
              <p>طريقة الدفع</p>
              <p>الدفع عند الاستلام</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderDetails;
