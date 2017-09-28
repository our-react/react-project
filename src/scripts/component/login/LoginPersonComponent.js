
import {connect} from 'react-redux'

import {Link} from "react-router"
import HeaderComponent from "../common/HeaderComponent"
class LoginPersonComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
             user_info:{},
             data:{
                position: " ",
                fanhui: "icon-iconback",
                title: "会员中心",
                gouwu: "icon-shouye1",
                login: "icon-shezhi" 
             }
        }
    }
    componentWillMount(){
        if(JSON.stringify(this.props.user_info_i)!="{}"){         
             this.setState({
              user_info:this.props.user_info_i
         })
        }else{
            this.setState({
                user_info:JSON.parse(localStorage.user)
            })
        }
    }
    handleBack() {
        history.back()
    }
    render() {
        return(
            <div className="login_person">
                 <div className="header">
                    <div className="header-nav">
                        <span className="iconfont icon-iconback" onClick={this.handleBack.bind(this)}></span>     
                        <div className="header-right">
                             <h4 className="logo">{this.state.data.title}</h4>
                             <Link to="/"><span className="iconfont icon-shouye1 per"></span></Link>
                             <Link to="/exit"><span className="iconfont icon-shezhi per"></span></Link>
                        </div>
                    </div>           
            
                </div>
               <div className="person_binner">
                    <span className="person_logo">
                        <img src="./images/login/index_logo.png" alt=""/>
                    </span>
                    <span className="person_name">{"hsjl_"+this.state.user_info.phone_number}</span>
               </div>
                <div className="person_lead">
                    <Link>
                        <span className="iconfont icon-daifukuan"></span>
                        <span>待付款</span>
                    </Link>
                    <Link >
                        <span className="iconfont icon-daishouhuo"></span>
                        <span>待收货</span>
                    </Link>
                    <Link >
                        <span className="iconfont icon-pingjia"></span>
                        <span>全部评价</span>
                    </Link>
                    <Link >
                        <span className="iconfont icon-quanbudingdan"></span>
                        <span>全部订单</span>
                    </Link>
                </div>
                <div className="person_quan">
                    <Link>
                        <dl>
                           <dt className="iconfont icon-xiangji"></dt>
                           <dd>
                                <span className="mine">我的现金券</span>   
                                <span className="jifen">积分余额：0</span>
                            </dd>
                        </dl>
                        <p>
                            <span className="quan_count">0张</span>
                            <span className="iconfont icon-arrow-right"></span>                          
                        </p>
                    </Link>
                </div>
                <div className="person_all">
                     <Link> 
                        <p>
                            <span className="iconfont icon-shoucang1 font"></span>
                            <span className="person_all">个人资料</span>
                        </p>
                        <span className="iconfont icon-arrow-right"></span>                                               
                    </Link>
                    <Link> 
                        <p>
                            <span className="iconfont icon-shoucang1 font"></span>
                            <span className="person_all">我的团购</span>
                        </p>
                        <span className="iconfont icon-arrow-right"></span>                                               
                    </Link>
                    <Link> 
                        <p>
                            <span className="iconfont icon-shoucang1 font"></span>
                            <span className="person_all">我的收藏</span>
                        </p>
                        <span className="iconfont icon-arrow-right"></span>                                               
                    </Link>
                    <Link> 
                        <p>
                            <span className="iconfont icon-yanjing font"></span>
                            <span className="person_all">我的验光单</span>
                        </p>
                        <span className="iconfont icon-arrow-right"></span>                                               
                    </Link>
                    <Link> 
                        <p>
                            <span className="iconfont icon-shouhuodizhiguanli font"></span>
                            <span className="person_all">收货地址</span>
                        </p>
                        <span className="iconfont icon-arrow-right"></span>                                               
                    </Link>
                    <Link> 
                        <p>
                            <span className="iconfont icon-yonghu-mimaguanli font"></span>
                            <span className="person_all">密码管理</span>
                        </p>
                        <span className="iconfont icon-arrow-right"></span>                                               
                    </Link>
                </div>
            </div>            

        )
    }
}
LoginPersonComponent.defaultProps={
          
}

export default connect(state=>state)(LoginPersonComponent)

