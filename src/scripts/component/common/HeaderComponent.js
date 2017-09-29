import {Link} from 'react-router'
import Fetch from "../../module/fetch"
import position  from "../../module/position"
import {connect} from 'react-redux'

class HeaderComponent extends React.Component {
     
    constructor(props, context) {
        super(props, context)
        this.state={
            isShow: false
        }
    }
    showContent() {      
        if(this.props.data.title) {
          return  <h4 className="logo">{this.props.data.title}</h4>       
        }else {
            return <h4 className="logo"></h4>
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
            <div className="header">

                <div className="header-nav">
                    <span className="iconfont icon-iconback" onClick={this.handleBack.bind(this)}></span>     
                    <div className="header-right">
                    {
                        this.showContent() 
                    }
                        <Link to="/cart" className="iconfont icon-gouwuche gouwu"></Link>
                        <span className="iconfont icon-gengduo" onClick={this.handleTabs.bind(this)}></span>
                    </div>
                </div>
                
                <div className="header-tabs" style={style}>
                    <Link><span className="iconfont icon-wode1"></span><span>会员中心</span></Link>
                    <Link to="/"><span className="iconfont icon-shouye1"></span><span>首页</span></Link>

                </div>
             </div> 
        )
    }
}

export default HeaderComponent

