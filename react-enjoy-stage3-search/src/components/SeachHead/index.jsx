import React from "react"
import SearchInput from "../SearchInput"
import "./style.less"

export default class SearchHeader extends React.Component {

    goSearchHandler(keywords){
        console.log(keywords);
    }

    clickHandler(){
        window.history.back();
    }

    render(){
        return(
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={ this.clickHandler.bind(this) }>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput history={ this.props.history }/>
                </div>
            </div>

                
        )
    }
}