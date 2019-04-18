import React, { Component } from 'react';
import HeadCity from "../../components/Head"
import CurrentCity from "../../components/CurrentCity"
import CityList from "../../components/CityList"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cityActions from "../../actions/city"

class City extends Component {

    getCityHandler(city) {
        // 写入到redux中
        this.props.cityActions.updateCity({
            cityName:city
        })
    }

    render() {
        return (
            <div>
                {/* this.props.history:路由提供的history */}
                <HeadCity title="城市选择" history={this.props.history} />
                <CurrentCity city={ this.props.city.cityName } />
                <CityList onCityName={this.getCityHandler.bind(this)} />
            </div>
        );
    }
}


// redux部分

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
)(City);
