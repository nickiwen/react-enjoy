import React, { Component } from 'react';
import { getCommentData } from "../../../fetch/Comment"
import CommentListView from "../../../components/CommentListView"

class CommentList extends Component {

    constructor(){
        super();
        this.state = {
            commentData:[],
            hasMore:false
        }
    }

    componentDidMount(){
        const id = this.props.id;
        const result = getCommentData(id);
        result.then(res => {
            this.setState({
                commentData:res.data,
                hasMore:res.hasMore
            })
        })
    }

    render() {
        return (
            <div>
               {
                   this.state.commentData.length > 0 ?
                   <CommentListView data={ this.state.commentData }/> :
                   <div>请等待...</div>
               }
            </div>
        );
    }
}

export default CommentList;
