import React, { Component } from 'react';
import { getDetailsData } from "../../../fetch/Details"
import DetailsListView from "../../../components/DetailsListView"
import { connect } from "react-redux"

class DetailsList extends Component {

    constructor(){
        super();
        this.state = {
            detailsData:{}
        }
    }

    componentDidMount(){
        const id = this.props.id;
        const result = getDetailsData(id);
        result.then(res => {
            this.setState({
                detailsData:res,
            })
        })
    }

    buyHandler(){
        if(this.props.userinfo.username){
            alert("购买成功")
        }else{
            // 判断是否登陆
            this.props.history.push("/login/"+encodeURIComponent(`/details/${this.props.id}`))
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.detailsData.imgs ?
                    <DetailsListView onBuyHandler={ this.buyHandler.bind(this) } data={ this.state.detailsData } id={ this.props.id } /> :
                    <div>请等待...</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}

export default connect(
    mapStateToProps
)(DetailsList);
