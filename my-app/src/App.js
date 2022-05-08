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
import MyOrders from "./components/basket/MyOrders";
import MyOrderDetail from "./components/basket/MyOrderDetail";
import Basket from "./components/basket/Basket";
import ForgettedPassword from "./components/login/ForgettedPassword";
import CheckEmail from "./components/login/CheckEmail.jsx";
import NewPassword from "./components/login/NewPassword";
import UserInformationPayment from "./components/basket/UserInformation-payment";
import Delivery from "./components/basket/Delivery";
import PaymentMethod from "./components/basket/PaymentMethod";
import UserInformationProfile from "./components/basket/UserInformationProfile";

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
          <Route
            path="/user-information"
            element={<UserInformationPayment />}
          />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route
            path="/user-information-profile"
            element={<UserInformationProfile />}
          />
        </Routes>

        <Footer />
      </React.Fragment>
    </Provider>
  );
};

export default App;
