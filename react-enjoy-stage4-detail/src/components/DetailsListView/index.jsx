import React from "react"
import "./style.less"
import DetailsHead from "../Head"
import Swiper from "../Swiper"
import Tabs from "../Tabs"
import DetailsList from "../../container/Details/subpage/commentList"

export default class DetailsView extends React.Component {

    // 购买
    buyHandler(){
        this.props.onBuyHandler();
    }

  

    render() {
        const data = this.props.data;
        const id = this.props.id;
        return (
            <div className="detail-info">
                <DetailsHead title="详情页" />
                <Swiper banners={data.imgs} />
                <Tabs>
                    <div tabName="房屋信息">
                        <h3>{data.title}</h3>
                        <div className="box">
                            <ul>
                                <li>
                                    <span>{data.price}/月</span>
                                    <p>租金</p>
                                </li>
                                <li>
                                    <span>{data.info.type}/月</span>
                                    <p>房型</p>
                                </li>
                                <li>
                                    <span>{data.houseType}</span>
                                    <p>面积</p>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info-list">
                                <p>楼层：{data.info.level}</p>
                                <p>装修：{data.info.style}</p>
                            </div>
                            <div className="info-list">
                                <p>类型：{data.info.type}</p>
                                <p>朝向：{data.info.orientation}</p>
                            </div>
                            <div className="info-list">
                                <p>年代：{data.info.years}</p>
                            </div>
                        </div>

                        <div>
                            <button onClick={ this.buyHandler.bind(this) }>购买</button>
                        </div>

                    </div>
                    <div tabName="房屋评价">
                        <DetailsList id={ id }/>
                    </div>
                </Tabs>
            </div>
        )
    }
}