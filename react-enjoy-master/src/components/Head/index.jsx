import React from "react"
import "./style.less"

export default class Head extends React.Component {

    backPage(){
        // 编程式导航
        // this.props.history.push("/")
        // this.props.history.replace("/")

        // 浏览器的返回功能
        window.history.back();
    }

    render(){
        return(
            <div id="common-header">
                <span className="back-icon" onClick={ this.backPage.bind(this) }>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}