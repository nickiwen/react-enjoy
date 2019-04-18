import React from "react"
import "./style.less"

export default class CurrentCity extends React.Component{
    render(){
        return(
            <div className="current-city">
                <h2>当前城市：{ this.props.city }</h2>
            </div>
        )
    }
}