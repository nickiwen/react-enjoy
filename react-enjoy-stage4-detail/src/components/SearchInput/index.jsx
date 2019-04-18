import React from "react"
import "./style.less"

export default class SearchInput extends React.Component{
    constructor(){
        super();
        this.state = {
            values:""
        }
    }

    getValuesHandler(event){
        this.setState({
            values:event.target.value
        })
    }

    onKeyUpHandler(event){
        // 判断是否是回车时间
        if(event.keyCode === 13){
            if(this.state.values.length > 0){
                // 跳转到搜索页面
                // this.props.onGOSearch(this.state.values);
                // 跳到搜索页面
                this.props.history.push(`/search/${this.state.values}`)
            }
        }
    }

    render(){
        return(
            <input 
                type="text"
                className="search-input" 
                value={ this.state.values }
                placeholder="请输入搜索内容"
                onKeyUp={ this.onKeyUpHandler.bind(this) }
                onChange={this.getValuesHandler.bind(this) }
            />
        )
    }
}