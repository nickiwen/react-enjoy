import React from 'react'
import './style.less'
import { getSubmitCommentData } from "../../../fetch/SubmitComment"

export default class Item extends React.Component {


    constructor(){
        super();
        this.state = {
            commentState:0
        }
    }

    componentDidMount(){
        this.setState({
            commentState:this.props.data.commentState
        })
    }

    // 评价按钮
    commentHandler() {
        this.setState({
            commentState:1
        })
    }

    // 评价提交按钮
    submitCommentHandler(){
        const content = this.refs.commentText;
        getSubmitCommentData({
            content:content.value
        })
        .then(res => {
            alert(res.msg)
        })

        this.setState({
            commentState:2
        })
    }

    // 评价取消
    hideComment(){
        this.setState({
            commentState:0
        })
    }

    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                            <button className="btn" onClick={this.commentHandler.bind(this)}>评价</button>
                            :
                            this.state.commentState === 1 ? ""
                            :
                            <button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {/* 评价框 */}
                {
                    this.state.commentState === 1 ?
                        <div className="comment-text-container">
                            <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref="commentText"></textarea>
                            <button className="btn" onClick={this.submitCommentHandler.bind(this)}>提交</button>
                            &nbsp;
                            <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                        :
                        ""
                }

            </div>
        )
    }
}
