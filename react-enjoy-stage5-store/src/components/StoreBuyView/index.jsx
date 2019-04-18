import React from "react"
import "./style.less"

export default class StoreBuyView extends React.Component {

    collectHandler(){
        this.props.onCollectEvent();
    }

    buyHandler(){
        this.props.onBuyEvent();
    }

    render(){
        const collected = this.props.collected
        return(
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        collected ?
                        <button onClick={ this.collectHandler.bind(this) } className="selected o">已收藏</button>
                        :
                        <button onClick={ this.collectHandler.bind(this) } className="selected">收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={ this.buyHandler.bind(this) }>购买</button>
                </div>
            </div>
        )
    }
}