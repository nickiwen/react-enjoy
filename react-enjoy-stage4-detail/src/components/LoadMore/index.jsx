import React, { Component } from 'react';
import "./style.less"

class LoadMore extends Component {
    
    componentDidMount(){
        const wrapper = this.refs.wrapper;
        // 获取页面高度
        const winHeight = document.documentElement.clientHeight;

        // 声明定时器
        let timer = null;
 
        // 绑定this
        const _this = this;

        // 加载判断的函数
        function loadHandler(){
            // getBoundingClientRect:获取当前元素的边距
            let top = wrapper.getBoundingClientRect().top;
            if(winHeight >= top){
                // 应该加载更多数据了
                _this.props.onLoadHandler();
            }
        }

        // 添加滚动事件
        window.addEventListener("scroll",function(event){
            // 只执行一次
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(function(){
                loadHandler(); 
            },300)
        })  
    }

    render() {
        return (
            <div ref="wrapper">
                LoadMore
            </div>
        );
    }
}

export default LoadMore;
