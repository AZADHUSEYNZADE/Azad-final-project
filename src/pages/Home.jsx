import React, { useState } from "react";
import Hero from "../components/hero-section/Hero";
import Offers from "../components/Offers/Offers";
import Overview from "../components/Overview/Overview";
import Services from "../components/Services/Services";
import Commerce from "../library/commerce/Commerce";
import SponsorItem from "../components/sponsors/SponsorItem";
import FilteredCards from "../components/FilteredCards/FilteredCards";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [sponsor, setSponsor] = useState([]);

  const fetchProducts = () => {
    Commerce.products
      .list({ category_slug: ["all"] })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  const fetchAccessory = () => {
    Commerce.products
      .list({ category_slug: ["accesorries"] })
      .then((products) => {
        setAccessory(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };
  const fetchSponsor = () => {
    Commerce.products
      .list({ category_slug: ["sponsors"] })
      .then((products) => {
        setSponsor(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };
  React.useEffect(() => {
    fetchProducts();
    fetchAccessory();
    fetchSponsor();
  }, []);
  return (
    <div>
      <>
        <Hero />
        <FilteredCards products={products} />
        <FilteredCards products={products} />
        <Offers />
        {/* <FilteredCards products={accessories} /> */}

        <Overview />
        <Services />
        <SponsorItem sponsor={sponsor} />
      </>
    </div>
  );
};

export default Home;
