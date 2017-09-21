
import {Link} from 'react-router'
class NavComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
         
        }
    }
   
    render(){
        
        return (
            <div className="navs">
                <Link activeClassName="active" to="/index"><span className="iconfont icon-shouye"></span>首页</Link>
                <Link activeClassName="active" to="/newthings"><span className="iconfont icon-xinpin"></span>新品</Link>
                <Link activeClassName="active" to="/socket"><span className="iconfont icon-kefu"></span>客服</Link>
                <Link activeClassName="active" to="/nearby"><span className="iconfont icon-fujin"></span>附近体验店</Link>
                <Link activeClassName="active" to="/login"><span className="iconfont icon-wode"></span>我的</Link>
            </div>
        )
    }
}
//定义默认属性
NavComponent.defaultProps={

}

export default NavComponent