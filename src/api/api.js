import axios from "axios";
import cookie from "react-cookies";

const baseUrl = "https://books-spy-be-production.up.railway.app/api/v1";

export const getAllProducts = async () => {
  const res = await axios.get(`${baseUrl}/products`);
  return res.data;
};

export const getAllProductsByAuthor = async (id) => {
  const res = await axios.get(`${baseUrl}/products?author=${id}`);
  return res.data;
};

export const getMostSellingProducts = async () => {
  const res = await axios.get(`${baseUrl}/products?isMostSelling=true`);
  return res.data;
};

export const getNewProducts = async () => {
  const res = await axios.get(`${baseUrl}/products?isNewArrival=true`);
  return res.data;
};

export const getByCategory = async (category) => {
  const res = await axios.get(`${baseUrl}/products?category=${category}`);
  return res.data;
};

export const getAllCategories = async () => {
  const res = await axios.get(`${baseUrl}/products/getProductsByCategory`);
  return res.data;
};

export const addOrder = async (body) => {
  const res = await axios.post(`${baseUrl}/orders`, body);
  return res.data;
};

export const getOrdersByUserId = async (id) => {
  const res = await axios.get(`${baseUrl}/orders/my-orders/${id}`, {
    headers: { Authorization: `Bearer ${cookie.load("token")}` },
  });
  return res.data;
};

export const validatePromo = async (promo) => {
  const res = await axios.get(`${baseUrl}/promo/validate/${promo}`);
  return res.data;
};
//   export const getAllTodos = async () => {
//     if (pass) {
//       const res = await axios.get(`${baseUrl}/todos`, {
//         auth: {
//           username: `${pass?.filtered[0].username}`,
//           password: `${pass?.filtered[0].password}`,
//         },
//       });
//       return res.data;
//     }
//   };
//   export const updateTodo = async (id) => {
//     const res = await axios.put(
//       `${baseUrl}/todos/${id}`,
//       {},
//       {
//         auth: {
//           username: `${pass?.filtered[0].username}`,
//           password: `${pass?.filtered[0].password}`,
//         },
//       }
//     );
//     return res.data;
//   };

//   export const deleteTodo = async (id) => {
//     const res = await axios.delete(`${baseUrl}/todos/${id}`, {
//       auth: {
//         username: `${pass?.filtered[0].username}`,
//         password: `${pass?.filtered[0].password}`,
//       },
//     });
//     return res.data;
//   };
