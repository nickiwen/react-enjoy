import React from 'react';
import "./style.less"

export default class LoginView extends React.Component {

    constructor(){
        super()
        this.state = {
            value:""
        }
    }

    userNameHandler(event){
        this.setState({
            value:event.target.value
        })
    }

    loginHandler(){
        this.props.onLoginEvent(this.state.value)
    }

    render(){
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input 
                        placeholder="请输入手机号"
                        value={ this.state.username }
                        onChange={ this.userNameHandler.bind(this) }
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码" />
                </div>
                <button className="btn-login" onClick={ this.loginHandler.bind(this) }>登录</button>
            </div>
        )
    }
}