import React, { Component } from 'react';
import { getHomeHotPart1,getHomeHotPart2 } from "../../../fetch/Home"
import HomeHotListView from "../../../components/HomeHotListView"

class HomeHotList extends Component {

    constructor(){
        super();
        this.state = {
            listViewData:[],
            listViewData2:[]
        }
    }

    componentDidMount(){
        const resultPart1 = getHomeHotPart1("北京");
        resultPart1.then(data => {
            this.setState({
                listViewData:data
            })
        })
        

        const resultPart2 = getHomeHotPart2("北京");
        resultPart2.then(data => {
            this.setState({
                listViewData2:data
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.listViewData.length>0
                    ? <HomeHotListView data={ this.state.listViewData } title="热销单品"/>
                    : <div>数据正在加载，请等待</div>
                }

                {
                    this.state.listViewData2.length>0
                    ? <HomeHotListView data={ this.state.listViewData2 } title="家庭常用"/>
                    : <div>数据正在加载，请等待</div>
                }
            </div>
        );
    }
}

export default HomeHotList;
