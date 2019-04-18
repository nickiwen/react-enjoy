import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from "./Pagination"
import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Swiper extends Component {

    constructor(){
        super();
        this.state = {
            index:0
        }
    }

    handleChangeIndex(index){
        this.setState({
            index:index
        })
    }

    render() {
        const banners = this.props.banners;
        return (
            <div className="swiper">
                <AutoPlaySwipeableViews interval={3000} onChangeIndex={this.handleChangeIndex.bind(this)}>
                    {
                        banners.map((element,index) => {
                            return(
                                <div key={index} className="swiper-view">
                                    <img src={ element } alt=""/>
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination dots={ banners.length } index={ this.state.index }/>
            </div>
        );
    }
}

export default Swiper;
