import React, { Component } from 'react';
import HeadNav from "../../components/HeadNav"
import FootNav from "../../components/FootNav"
import Swiper from "../../components/Swiper"

import HomeHotList from "./subpage/homeHotList"

import Banner1 from "../../static/images/banner1.png"
import Banner2 from "../../static/images/banner2.png"
import Banner3 from "../../static/images/banner3.png"

import { connect } from "react-redux"


class Home extends Component {
  render() {
    return (
      <div>
        <HeadNav cityName={ this.props.city.cityName }/>
        <Swiper banners={[Banner1,Banner2,Banner3]}/>
        <HomeHotList />
        <FootNav />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    city:state.city
  }
}

export default connect(
  mapStateToProps
)(Home);
