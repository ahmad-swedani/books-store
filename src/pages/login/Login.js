import "./Login.css";
import "react-tabs/style/react-tabs.css";
import React, { useState } from "react";
import cookie from 'react-cookies'
import Layout from "../../components/Layout/mainLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await axios
      .post(`https://books-spy-be-production.up.railway.app/api/v1/users/login`, {email,password})
      .then((res) => {
        cookie.save("token", res.data.token, {
          expires: new Date(Date.now() + 86400000),
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Incorrect",
          text: "The email address or password is incorrect. Please try again",
        });
      });
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} className="loginCol">
            <h3>تسجيل الدخول</h3>
            <Form className="loginForm" onSubmit={(e) => e.preventDefault()}>
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
              <Button
                variant="primary"
                className="w-100"
                onClick={() => handleLogin()}
              >
                تسجيل الدخول
              </Button>
            </Form>
            <Link to="/register" className="registerLink">تسجيل حساب جديد</Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Login;
