import React, { Component } from 'react';
import LoginView from "../../../components/LoginView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userInfoActions from "../../../actions/userinfo"

class LoginList extends Component {

    loginHandler(username){
        // 写入数据到redux
        this.props.userInfoActions.login({
            username:username
        })
        // 回到原来的位置
        /**
         * 两种设计访问
         *      第一种：window.history.back();
         *      第二种：记录路径来源
         *  
         */
        // window.history.back();
        // 获取路由参数
        this.props.history.replace(decodeURIComponent(this.props.router))
        // this.props.onLoginUrl();
    }

    render() {
        return (
            <div>
                <LoginView onLoginEvent={this.loginHandler.bind(this)} />
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(userInfoActions,dispatch) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginList);
