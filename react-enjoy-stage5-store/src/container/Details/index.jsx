import React, { Component } from 'react';
import DetailsList from "./subpage/detailsList"

class Details extends Component {
  render() {
    return (
      <div>
            <DetailsList id={this.props.match.params.goods_id} history={ this.props.history }/>
      </div>
    );
  }
}

export default Details;
