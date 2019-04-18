import React, { Component } from 'react';
import SearchList from "./subpage/SearchList"
import SearchHead from "../../components/SeachHead"

import { connect } from "react-redux"

/**
 * 组件分为三类：
 *  1.主页面(容器)    seach
 *  2.智能组件(逻辑)  seachlist
 *  3.木偶组件(视图)  seachlistview
 */

class Search extends Component {
  render() {
    return (
      <div>
        <SearchHead history={ this.props.history }/>
        <SearchList keywords={ this.props.match.params.keywords } cityName={ this.props.city.cityName }/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    city:state.city
  }
}

export default connect(
  mapStateToProps
)(Search);


