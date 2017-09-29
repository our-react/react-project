
import {Link} from "react-router"
class LoginSetComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
             user_info:{},             
        }
    }
    handleBack() {
        history.back()
    }
    handleClick(){
        localStorage.removeItem("user")
    }
    render() {
        return (
            <div className="login_exit">
                <div className="header_exit">
                    <span className="iconfont icon-iconback" onClick={this.handleBack.bind(this)}></span>                         
                    <h4 className="logo">会员中心</h4>                            
                </div>           
                <div className="exit_body">
                    <div className="exit_content">
                        <h1><img src="./images/login/logout-logo.png"/></h1>
                        <p>LOHO眼镜生活是香港LOHO眼镜生活有限公司旗下，集自主设计、研发生产、互联网与门店销售、配镜服务为一体的中高端眼镜销售品牌。
                            LOHO眼镜生活于2011年进军中国内地市场。通过快时尚的定位方式，配合高性价比的配镜方案，赢得广大客户的青睐。
                            LOHO产品一直以来坚持三大核心理念：时尚轻便、佩戴舒适、价格透明化。现已在中国多个城市拥有近两百家门店。
                        </p>
                        <dl className="exit_footer">
                            <dt><img src="./images/login/loho88.jpg"/></dt>
                            <dd>
                                <span class="mgb-05rem">预约热线：400-887-1920</span>
                                <span>(服务时间&nbsp;09:00&nbsp;-&nbsp;23:00)</span>
                            </dd>
                        </dl>
                    </div>

                    <Link onClick={this.handleClick.bind(this)} to="/login" className="bot">
                        <span>退出登录</span>
                    </Link>
                </div>     
            </div>            
        )
    }
}

LoginSetComponent.defaultProps={
      
}

export default LoginSetComponent


