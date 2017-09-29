import {Link} from 'react-router'

class HeaderComponent extends React.Component {
     
    constructor(props, context) {
        super(props, context)
        this.state={
            isShow: false
        }
    }
    handleBack() {
        history.back()
    }
    handleTabs() {
        this.setState({
            isShow:!this.state.isShow
        })
    }

    render() {
        let style = this.state.isShow?{display:"block"}:{display:"none"}
        return (
            <div className="cart-header">
                <div className="cart-header-navs">
                    <span className="iconfont icon-iconback" onClick={this.handleBack.bind(this)}></span>                      
                    <h4 className="logo"><span className="iconfont icon-gouwuche1"></span>购物车</h4>                   
                    <span className="iconfont icon-c-classification" onClick={this.handleTabs.bind(this)}></span>                 
                </div>
                
                <div className="cart-header-tabs" style={style}>
                    <Link to="/"><span className="iconfont icon-shouye2"></span><span>首页</span></Link>                    
                    <Link to="/"><span className="iconfont icon-huiyuan"></span><span>会员中心</span></Link>
                    <Link to="/"><span className="iconfont icon-fenlei"></span><span>我的订单</span></Link>
                    <Link to="/socket"><span className="iconfont icon-zixun"></span><span>在线咨询</span></Link>
                </div>
             </div> 
        )
    }
}

export default HeaderComponent



