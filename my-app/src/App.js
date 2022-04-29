import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import PaginatedProducts from "./components/products/PaginatedProducts";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
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
      </Routes>

      <Footer />
    </React.Fragment>
  );
};

export default App;
