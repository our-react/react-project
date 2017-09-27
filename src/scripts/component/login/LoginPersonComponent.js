
import {connect} from 'react-redux'
// import HeaderComponent from "../common/HeaderComponent"
class LoginPersonComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
             user_info:{}
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
    render() {
        return(
            <div className="login_person">
                {/* <HeaderComponent/> */}
                <p>个人中心</p>
            </div> 
            
        )
    }
}
LoginPersonComponent.defaultProps={
    //    position: "",
    //     fanhui: "icon-iconback",
    //     title: "会员中心",
    //     gouwu: "icon-shouye1",
    //     login: "icon-shezhi"      
}

export default connect(state=>state)(LoginPersonComponent)

