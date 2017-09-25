
import PhoneComponent from "./PhoneComponent"
import UserComponent from "./UserComponent"
import store from "../../redux/store"
import {Link} from "react-router"
import {connect} from 'react-redux'
import actions from "../../redux/actions"
class InfoComponent extends React.Component {
     constructor(props,context){
        super(props,context)
        this.state={
            user_info:{},
            isPhone:true
        }
    }
    choose(){
        let arr=[]
        if(this.state.isPhone){
            arr.push(<PhoneComponent/>)
        }else{
            arr.push(<UserComponent/>)
        }
        return arr
    }
    change_1(){
        this.setState({
            isPhone:true
        })
    }
    change_2(){
        this.setState({
            isPhone:false
        })
    }   
   
    render() {
        return (
            <div className="login_choose">
                <ul>
                    <li onClick={this.change_1.bind(this)} className={this.state.isPhone?"_choose":''}><span className={this.state.isPhone?"_choose_word":""}>手机号码快速登录</span></li>
                    <li onClick={this.change_2.bind(this)} className={!this.state.isPhone?"_choose":''}><span className={!this.state.isPhone?"_choose_word":""}>账号密码登录</span></li>
                </ul>
                 {this.choose()} 
                
            </div> 
        )
    }
}

export default connect(state=>state)(InfoComponent)
