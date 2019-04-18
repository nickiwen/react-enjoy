import React from "react"
import "./style.less"

export default class Tabs extends React.Component {

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    /**
     * 
     * 使用tab时候的结构
     * <tabs>
     *  <div tabName="tab1">
     *      内容1
     *  </div>
     *  <div tabName="tab2">
     *      内容2
     *  </div>
     * </tabs>
     * 
     * tab组件在渲染时候的结构
     * <div>tab1</div>  // title 
     * <div>tab2</div>  // title 
     * <div>内容1</div>  // content
     * <div>内容2</div>  // content
     * 
     * 注意：tab的显示，都是通过css样式控制显示与隐藏
     * 
     */

    // 事件
    check_item_index(index){
        return index === this.state.currentIndex ? "show" : "hide"
    }

    // 切换事件
    changeTabsHandler(index){
        this.setState({
            currentIndex:index
        })
    }


    // 处理高亮样式
    check_item_active(index){
        return index === this.state.currentIndex ? "Tab_title active" : 'Tab_title' 
    }

    render(){
        return(
            <div>
                {/* tab标签 */}
                <div  className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return(
                                <div className={ this.check_item_active(index) } onClick={ this.changeTabsHandler.bind(this,index) }>
                                    { element.props.tabName }
                                </div>
                            )
                        })
                    }
                </div>
                {/* tab内容  */}
                <div className="Tab_item_wrap">
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return(
                                <div className={ this.check_item_index(index) }>
                                    { element.props.children }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}