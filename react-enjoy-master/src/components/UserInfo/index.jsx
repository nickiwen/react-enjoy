import React from 'react'
import './style.less'

export default class UserInfo extends React.Component {
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    &nbsp;
                <span>{this.props.city}</span>
                </p>
            </div>
        )
    }
}