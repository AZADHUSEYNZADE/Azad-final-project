import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Commerce from "../../library/commerce/Commerce";
import { useParams } from "react-router-dom";
import Products from "./Products";
import "./PaginatedProducts.scss";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const PaginatedProducts = ({ productsPerPage }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [allProductsCount, setAllProductsCount] = useState(0);
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    const fetchProducts = () => {
      Commerce.products
        .list({ category_slug: [categoryId] })
        .then((products) => {
          setProducts(products.data);
          setAllProductsCount(products.data.length);
          setOpen(false);
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
        });
    };

    fetchProducts();
  }, [categoryId]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + productsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / productsPerPage));
  }, [itemOffset, productsPerPage, products]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * productsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#000", opacity: "1", zIndex: "1", background: "white" }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {currentItems && allProductsCount && (
        <Products products={currentItems} count={allProductsCount} />
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"pagination-btns"}
        previousLinkClassName={"previous-btn"}
        nextLinkClassName={"next-btn"}
        activeClassName={"pagination-active"}
        pageClassName={"pagination-disabled"}
      />
    </>
  );
};

export default PaginatedProducts;
