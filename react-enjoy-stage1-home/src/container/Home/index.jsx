import React, { Component } from 'react';
import HeadNav from "../../components/HeadNav"
import FootNav from "../../components/FootNav"
import Swiper from "../../components/Swiper"

import HomeHotList from "./subpage/homeHotList"

import Banner1 from "../../static/images/banner1.png"
import Banner2 from "../../static/images/banner2.png"
import Banner3 from "../../static/images/banner3.png"


class Home extends Component {
  render() {
    return (
      <div>
        <HeadNav />
        <Swiper banners={[Banner1,Banner2,Banner3]}/>
        <HomeHotList />
        <FootNav />
      </div>
    );
  }
}

export default Home;
