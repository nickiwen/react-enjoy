import React from 'react';
import "./style.less"

export default class Pagination extends React.Component {
    render() {
        const dotsArr = new Array(this.props.dots).fill(1);
        let showIndex = this.props.index;
        return(
            <div className="swiper-pagination">
                <ul>
                    {
                        dotsArr.map((element,index) => {
                            return <li className={ showIndex === index ? 'selected' : "" } key={index}></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}