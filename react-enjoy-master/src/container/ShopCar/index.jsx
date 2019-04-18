import React, { Component } from 'react';
import CarHead from "../../components/Head"
import { connect } from "react-redux"
import UserInfo from "../../components/UserInfo"
import CarList from "./subpage/carlist"

class ShopCar extends Component {

    componentDidMount(){
        if(!this.props.userinfo.username){
            this.props.history.push("/login/"+encodeURIComponent("/car"))
        }
    }

    render() {
        return (
            <div>
                <CarHead title="购物车" />
                <UserInfo username={ this.props.userinfo.username } city={ this.props.city.cityName }/>
                <CarList username={ this.props.userinfo.username }/>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        userinfo:state.userinfo,
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(ShopCar);
