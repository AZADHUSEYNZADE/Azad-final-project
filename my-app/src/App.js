import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import PaginatedProducts from "./components/products/PaginatedProducts";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Footer from "./components/footer/Footer";
import Questions from "./components/footer/Questions";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import MyOrders from "./components/login/MyOrders";
import MyOrderDetail from "./components/login/MyOrderDetail";
import Basket from "./components/login/Basket";
import ForgettedPassword from "./components/login/ForgettedPassword";
import CheckEmail from "./components/login/CheckEmail.jsx";
import NewPassword from "./components/login/NewPassword";
import UserInformation from "./components/login/UserInformation";
import Delivery from "./components/login/Delivery";

import { Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products/:categoryId"
            element={<PaginatedProducts productsPerPage={9} />}
          />
          <Route path="/product-details/:productId" element={<Detail />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="/login-again" element={<Login />} />
          <Route path="/my-orders-detail" element={<MyOrderDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/forgetted-password" element={<ForgettedPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/user-information" element={<UserInformation />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>

        <Footer />
      </React.Fragment>
    </Provider>
  );
};

export default App;
