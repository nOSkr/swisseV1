import React, { Fragment, useEffect, useState } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BrandLogoSliderThree from "../../wrappers/brand-logo/BrandLogoSliderThree";
import NewsletterFour from "../../wrappers/newsletter/NewsletterFour";
import ProductSliderThree from "../../wrappers/product/ProductSliderThree";
import BannerThirty from "../../wrappers/banner/BannerThirty";
import ProductSliderFour from "../../wrappers/product/ProductSliderFour";
import FeatureIconSix from "../../wrappers/feature-icon/FeatureIconSix";
import HeroSliderTwentyEight from "../../wrappers/hero-slider/HeroSliderTwentyEight";
import axios from "axios";
import {store} from "../../store/store"
import { setProducts } from "../../store/slices/product-slice";

const HomeFashionEight = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://altanzaan.org/api/v1/products").then((res) => {
      setData(res.data.data);

    });
  }, []);
  store.dispatch(setProducts(data));
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home!"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderTwentyEight />
        {/* feature text */}
        <FeatureIconSix spaceBottomClass="pb-100" spaceTopClass="pt-30" />
        {/* product slider */}
        <ProductSliderFour  />
        {/* banner */}
        <BannerThirty spaceTopClass="pt-100" spaceBottomClass="pb-70" />
        {/* product slider */}
        {/* <ProductSliderThree category="fashion" /> */}
        {/* brand logo slider */}
        <BrandLogoSliderThree spaceBottomClass="pb-95" spaceTopClass="pt-100" />
        {/* newsletter */}
        <NewsletterFour
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="hover-red"
          bgColorClass="bg-gray-7"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionEight;
