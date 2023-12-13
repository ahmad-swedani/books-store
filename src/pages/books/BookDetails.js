import "../../App.css";
import "react-tabs/style/react-tabs.css";
import React, { useState } from "react";
import Layout from "../../components/Layout/mainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import ProductStart1 from "../../components/resource/img/home/carousel1-product1.jpg";
import Swal from "sweetalert2";

function BookDetails() {
  // const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const handleAddToCart = () => {
    if (localStorage.getItem("products")) {
      let productsArray = JSON.parse(localStorage.getItem("products"));
      const exists = productsArray.some(
        (obj) => obj.data.id === location?.state?.id
      );
      if (exists) {
        Swal.fire({
          icon: "info",
          title: "الكتاب موجود",
          text: "الكتاب موجود في السلة",
        });
      } else {
        productsArray.push({
          data: location.state,
          counter: quantity,
          notes: notes,
        });
        localStorage.setItem("products", JSON.stringify(productsArray));
        Swal.fire({
          icon: "success",
          title: "تم إضافة الكتاب الى السلة",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      localStorage.setItem(
        "products",
        JSON.stringify([
          { data: location.state, counter: quantity, notes: notes },
        ])
      );
      Swal.fire({
        icon: "success",
        title: "تم إضافة الكتاب الى السلة",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} xl={6} className="mt-4">
            <img
              src={location.state?.photo || ProductStart1}
              alt={location.state.name?.en}
              className="product-img"
            />
          </Col>
          <Col xs={12} md={12} lg={6} xl={6} className="mt-4">
            <div>
              <h2>{location.state.name?.ar}</h2>
              <p>{location.state.mainPrice} د.أ</p>
            </div>
            <div>
              <h2>الكاتب</h2>
              <h3>{location.state?.author?.name?.ar}</h3>
            </div>
            <div>
              <p>{location.state.description}</p>
            </div>
            <div className="counterDiv">
              <p>العدد</p>
              <Counter setQuantity={setQuantity} current={null} />
            </div>
            <div className="feedback">
              <p>ملاحظات</p>
              <input
                type="text"
                className="feedbackInput"
                onChange={(e) => setNotes(e.target.value)}
              ></input>
            </div>
            <div className="buttonsDiv">
              <Button variant="outline-info" onClick={() => handleAddToCart()}>
                أضف لحقيبة التسوق
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default BookDetails;
