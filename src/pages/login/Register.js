import "./Login.css";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Layout from "../../components/Layout/mainLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { setRawCookie } from "react-cookies";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async () => {
    let body = {
      name,
      email,
      password,
      passwordConfirm,
    };
    await axios
      .post(
        `https://books-spy-be-production.up.railway.app/api/v1/users/signup`,
        body
      )
      .then((res) => {
        setRawCookie.save("token", res.data.token, {
          expires: new Date(Date.now() + 86400000),
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Incorrect",
          text: "Please try again",
        });
      });
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} className="loginCol">
            <h3>تسجيل حساب جديد</h3>
            <Form className="loginForm" onSubmit={(e) => e.preventDefault()}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>الإسم</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="الإسم"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="البريد الالكتروني"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>كلمة المرور</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="كلمة المرور"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirm">
                <Form.Label>تأكيد كلمة المرور</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                onClick={() => handleRegister()}
              >
                تسجيل حساب جديد
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Register;
