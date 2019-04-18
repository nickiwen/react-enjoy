import React, { Component } from 'react';
import StoreBuyView from "../../../components/StoreBuyView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import qs from "querystring"
import * as collectActions from "../../../actions/collect"

class StoreBuyList extends Component {

    constructor() {
        super();
        this.state = {
            collected: false
        }
    }

    componentDidMount() {
        this.setState({
            collected: this.isStore()
        })
    }

    storeHandler() {
        const goods_id = this.props.id;
        if (this.props.userinfo.username) {

            // 判断执行收藏或者是执行取消收藏
            if (!this.isStore()) {
                // 未收藏，要收藏
                // 存储收藏信息
                this.props.collectActions.setCollect({
                    id: goods_id
                })
                this.setState({
                    collected: true
                })
            } else {
                // 已收藏,要取消收藏
                this.props.collectActions.cancelCollect({
                    id: goods_id
                })
                this.setState({
                    collected: false
                })
            }

        } else {
            // 判断是否登陆
            this.props.history.push("/login/" + encodeURIComponent(`/details/${goods_id}`))
        }

    }

    // 获取当前是否收藏的判断值
    isStore() {
        const id = this.props.id;
        const collects = this.props.collect;
        // some every 
        return collects.some((element) => {
            return element.id === id;
        })
    }

    buyHandler() {
        const goods_id = this.props.id;
        // 整理订单信息 然会发送给后台
        /**
         * {
         *  name:"贩卖工资",
         *  num:2,
         *  ....
         * }
         * 
         * token
         * 
         */
        // token="DSF445SDFQ13424FSW13R32FWFFVASD213FVA343"
        const token = "DSF445SDFQ13424FSW13R32FWFFVASD213FVA343";
        // 已经登陆
        if (this.props.userinfo.username) {
            fetch("/api/order", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "Authorization": token
                },
                body:qs.stringify({order:"我是订单信息"})
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        } else {
            // 判断是否登陆
            this.props.history.push("/login/" + encodeURIComponent(`/details/${goods_id}`))
        }

    }

    render() {
        return (
            <div>
                <StoreBuyView
                    onBuyEvent={this.buyHandler.bind(this)}
                    onCollectEvent={this.storeHandler.bind(this)}
                    collected={this.state.collected}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        collect: state.collect,
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions: bindActionCreators(collectActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreBuyList);
