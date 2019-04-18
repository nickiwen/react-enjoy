import React, { Component } from 'react';
import { getOrderListData } from "../../../fetch/OrderList"
import OrderListView from "../../../components/OrderListView"

class CarList extends Component {

    constructor(){
        super();
        this.state = {
            oderData:[]
        }
    }

    componentDidMount(){
        const user = this.props.username;
        getOrderListData(user)
        .then(res => {
            this.setState({
                oderData:res
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.oderData.length > 0 ?
                    <OrderListView data={ this.state.oderData }/> :
                    <div>数据正在加载...</div>
                }
            </div>
        );
    }
}

export default CarList;
