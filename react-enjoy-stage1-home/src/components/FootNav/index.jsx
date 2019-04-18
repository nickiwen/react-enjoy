import React from "react"
import { NavLink } from "react-router-dom"
import "./style.less"

// 在移动端布局的时候，推荐使用flex处理,弹性盒子模型，尽可能不适用浮动和定位等样式
export default class FootNav extends React.Component {
    render() {
        return (
            <div className="nav-footer">
                <ul className="clear-fix">
                    <li>
                        <NavLink exact to="/">
                            <i className="iconfont icon-home"></i>
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <i className="iconfont icon-shop"></i>
                            商城
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">
                            <i className="iconfont icon-trophy"></i>
                            生活服务
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mine">
                            <i className="iconfont icon-team"></i>
                            我的
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}