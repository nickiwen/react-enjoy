import React, { Component } from 'react';
import { getSearchData } from "../../../fetch/Search"
import SearchListView from "../../../components/SearchListView"
import LoadMore from "../../../components/LoadMore"

class SearchList extends Component {

    constructor(){
        super();
        this.state = {
            searchData:[],
            hasMore:false
        }
    }

    http(cityName,keywords){
        const result = getSearchData(cityName,keywords);
        result.then(data => {
            this.setState({
                hasMore:data.hasMore,
                // 数据合并：this.state.searchData    data.data
                searchData:this.state.searchData.concat(data.data)
            })
        })
    }

    componentDidMount(){
        const cityName = this.props.cityName;
        const keywords = this.props.keywords;
        this.http(cityName,keywords)
    }

    // componentDidUpdate什么时候触发? state改变触发
    componentDidUpdate(prevProps,prevState){
        // prevProps:上一次的props
        // prevState:上一次的state
        const cityName = this.props.cityName;
        const keywords = this.props.keywords;
        if(keywords === prevProps.keywords){
            // 不再请求
            return;
        }
        // 在再次请求数据
        this.http(cityName,keywords);
        
    }

    loadHandler(){
        const cityName = this.props.cityName;
        const keywords = this.props.keywords;
        // 网络请求
        this.http(cityName,keywords);
    }

    render() {
        return (
            <div>
                {
                    this.state.searchData.length>0 ?
                    <SearchListView data={this.state.searchData} />
                    : <div>正在加载数据...</div>
                }
                {
                    this.state.hasMore 
                    ?
                    <LoadMore onLoadHandler={ this.loadHandler.bind(this) }/>
                    :
                    <div>到底了! 别动了</div>
                }
            </div>
        );
    }
}

export default SearchList;
