import "./style.css";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Layout from "../../components/Layout/mainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Counter from "../../components/Counter/Counter";
import { DeleteIcon } from "../../components/Icons/generalIcons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addOrder, validatePromo } from "../../api/api";
import { jwtDecode } from "jwt-decode";
import cookie from "react-cookies";
import Swal from "sweetalert2";

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

function Cart() {
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isReload, setIsReload] = useState(false);
  const [total, setTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("عمّان");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isPromo, setIsPromo] = useState(true);
  const [promo, setPromo] = useState("");
  const [promoPercentage, setPromoPercentage] = useState(0);
  const [allTotal, setAllTotal] = useState();
  const [promoJson, setPromoJson] = useState();

  const handleDelete = (id) => {
    let productsArray = JSON.parse(localStorage.getItem("products"));
    productsArray = productsArray.filter((obj) => obj.data.id !== id);
    setData(data.filter((obj) => obj.data.id !== id));
    localStorage.setItem("products", JSON.stringify(productsArray));
    setIsReload(true);
  };

  const handleSubmit = () => {
    if (name.trim() === "" || address.trim() === "" || phone.trim() === "") {
      Swal.fire({
        title: "نقص في المعلومات",
        text: "الرجاء إدخال جميع المعلومات",
        icon: "question",
      });
    } else {
      if (phone.length !== 10) {
        Swal.fire({
          title: "رقم الهاتف",
          text: "رقم الهاتف يجب أن يكون من 10 خانات",
          icon: "question",
        });
      } else {
        let items = [];
        data.forEach((item) => {
          items.push({ id: item.data.id, quantity: item.counter });
        });
        const body = {
          items: items,
          addedBy: cookie.load("token")
            ? jwtDecode(cookie.load("token")).id
            : null,
          deliveryData: {
            recipentName: name,
            addriss: address,
            country: "jordan", // always
            city: city,
            phoneNumber: phone, // it should be valid number
            notes: notes,
            promo: promoJson,
          },
        };
        Swal.fire({
          title: "تأكيد?",
          text: "هل أنت متأكد من ارسال هذا الطلب؟",
          icon: "question",
          showCancelButton: true,
          cancelButtonText: "لا",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "متأكد",
        }).then((result) => {
          if (result.isConfirmed) {
            addOrder(body).then((result) => {
              Swal.fire({
                icon: "success",
                title: "تم ارسال الطلب, سنتواصل معك بأقرب وقت",
                showConfirmButton: false,
                timer: 3000,
              });
              localStorage.removeItem("products");
              if (cookie.load("token")) {
                navigate("/orders");
              } else {
                navigate("/");
              }
            });
          }
        });
      }
    }
  };

  const handleValidatePromo = () => {
    validatePromo(promo)
      .then((data) => {
        if (data.data.promo.active) {
          Swal.fire({
            title: "الخصم",
            text: "تم إضافة الخصم",
            icon: "success",
          });
          setIsPromo(true);
          setPromoPercentage(data.data.promo.criteria.value / 100);
          setPromoJson(data.data.promo);
        } else {
          Swal.fire({
            title: "الخصم",
            text: "الخصم غير متاح",
            icon: "question",
          });
          setPromoPercentage(0);
          setIsPromo(false);
        }
      })
      .catch(() => {
        Swal.fire({
          title: "الخصم",
          text: "الخصم غير متاح",
          icon: "question",
        });
        setPromoPercentage(0);
        setIsPromo(false);
      });
  };

  useEffect(() => {
    if (
      localStorage.getItem("products") &&
      JSON.parse(localStorage.getItem("products")).length > 0
    ) {
      let productsArray = JSON.parse(localStorage.getItem("products"));
      setData(productsArray);
      setIsReload(false);
      let totalSum = 0;
      productsArray.forEach((item) => {
        totalSum += item.counter * item.data.mainPrice;
      });
      setTotal(totalSum);
      if (localStorage.getItem("fee")) {
        setDeliveryFee(Number(localStorage.getItem("fee")));
      }
    } else {
      setIsEmpty(true);
    }
    setAllTotal(total + deliveryFee - total * promoPercentage);
  }, [deliveryFee, isReload, promoPercentage, total]);

  return (
    <Layout>
      {!isEmpty ? (
        <Container className="mainContainer">
          <Row>
            <Col xs={12}>
              <h3>إتمام الطلب</h3>
              <div className="columnOne">
                <div className="tableHeader">
                  <p>المنتج</p>
                  <p>العدد</p>
                  <p>المجموع</p>
                  <p>حذف</p>
                </div>
                {data.map((item, index) => (
                  <div className="tableBody" key={index}>
                    <div className="imgDiv">
                      <img
                        src={item?.data?.photo}
                        alt="img"
                        className="bookImage"
                      />
                      <p>{item?.data?.name?.ar}</p>
                      <p>{item?.data?.mainPrice} د.أ</p>
                    </div>
                    <div className="counterDiv">
                      <Counter
                        current={item?.counter}
                        setQuantity={setQuantity}
                        data={item}
                        setIsReload={setIsReload}
                      />
                    </div>
                    <div className="priceDiv">
                      <p>{item?.data?.mainPrice * item?.counter} د.أ</p>
                    </div>
                    <div
                      onClick={() => handleDelete(item?.data?.id)}
                      className="deleteIcon"
                      style={{ height: "fit-content" }}
                    >
                      <DeleteIcon width={18} height={18} />
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
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="number">
                    <Form.Label>رقم الهاتف</Form.Label>
                    <Form.Control
                      type="tel"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="country">
                    <Form.Label>البلد</Form.Label>
                    <Form.Control type="text" disabled value="الأردن" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>المدينة</Form.Label>
                    <Form.Select onChange={(e) => setCity(e.target.value)}>
                      {cities.map((item, idx) => (
                        <option value={item}>{item}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>العنوان</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="notes">
                    <Form.Label>ملاحظات</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setNotes(e.target.value)}
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
                  <p>{total} د.أ</p>
                </div>
                <div className="info">
                  <p>التوصيل</p>
                  <p>{deliveryFee} د.أ</p>
                </div>
                {promoPercentage > 0 && (
                  <div className="info">
                    <p>الخصم</p>
                    <p>{Math.round(total * promoPercentage * 10) / 10} د.أ</p>
                  </div>
                )}
                <div className="info">
                  <p>المجموع الكلي</p>
                  <p>{allTotal} د.أ</p>
                </div>
                <div className="info">
                  <Form.Control
                    className="promo"
                    type="text"
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="الكوبون"
                    style={{
                      borderWidth: "thick",
                      borderColor: isPromo ? "green" : "red",
                    }}
                  />
                  <Button
                    variant="info"
                    className="promoButton"
                    style={{ color: "white" }}
                    onClick={() => handleValidatePromo()}
                  >
                    فحص
                  </Button>
                </div>
                <div className="way">
                  <p>طريقة الدفع</p>
                  <p>الدفع عند الاستلام</p>
                </div>
                <div className="buttonDiv">
                  <Button
                    variant="success"
                    className="sendingButton"
                    onClick={() => handleSubmit()}
                  >
                    أرسل الطلب
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          <p>لا يوجد منتجات حاليا في عربة التسوق</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            تابع التسوق
          </Link>
        </div>
      )}
    </Layout>
  );
}

export default Cart;
