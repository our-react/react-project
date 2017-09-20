

class NavComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
         
        }
    }
   
    render(){
        
        return (
            <div className="navs">
                <a><span className="iconfont icon-shouye"></span>首页</a>
                <a><span className="iconfont icon-xinpin"></span>新品</a>
                <a><span className="iconfont icon-kefu"></span>客服</a>
                <a><span className="iconfont icon-fujin"></span>附近体验店</a>
                <a><span className="iconfont icon-wode"></span>我的</a>
            </div>
        )
    }
}
//定义默认属性
NavComponent.defaultProps={

}

export default NavComponent