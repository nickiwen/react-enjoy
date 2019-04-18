import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cityActions from "../actions/city"
import { getCurrentLocation } from "../fetch/City"

// 初始化city

class Layout extends Component {

  // 生命周期函数初始化
  async componentDidMount() {

    const result = await getCurrentLocation(31.23691,121.50109);
    this.props.cityActions.initCity({
      cityName: result.result.address_component.city.substring(0,2)
    })
    

    // 定位：
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
        // 指示浏览器获取高精度的位置，默认为false  
        enableHighAcuracy: true,
        // 指定获取地理位置的超时时间，默认不限时，单位为毫秒  
        timeout: 5000,
        // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。  
        maximumAge: 3000
      });
      console.log("定位");
    } else {
      alert("Your browser does not support Geolocation!");
    }

    function locationSuccess(position) {
      var coords = position.coords;
      alert(coords);
    }

    function locationError(error) {
      switch (error.code) {
        case error.TIMEOUT:
          console.log("A timeout occured! Please try again!");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('We can\'t detect your location. Sorry!');
          break;
        case error.PERMISSION_DENIED:
          console.log('Please allow geolocation access for this to work.');
          break;
        case error.UNKNOWN_ERROR:
          console.log('An unknown error occured!');
          break;
      }
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cityActions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
