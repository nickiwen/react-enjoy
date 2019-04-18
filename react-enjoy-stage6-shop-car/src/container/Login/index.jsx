import React, { Component } from 'react';
import LoginList from "./subpage/loginList"

class Login extends Component {

  // loginChangeHandler(){
  //   console.log(this.props.match.params.router);
  //   // 回到来的页面
  //   this.props.history.replace(decodeURIComponent(this.props.match.params.router));
  // }

  render() {
    return (
      <div>
        <LoginList history={ this.props.history } router={ this.props.match.params.router }/>
      </div>
    );
  }
}

export default Login;
