
import LoginComponent from "./LoginComponent"

import LoginPersonComponent from "./LoginPersonComponent"

import {connect} from "react-redux"
class RootLoginComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            isHas:false,
            user_info:{}
        }
    }
    componentWillMount(){
        // console.log(localStorage.user)
        if(localStorage.user){
                this.setState({
                    isHas:true,
                    user_info:JSON.parse(localStorage.user)
                })
        }
    }
    componentDidUpdate(){
         if(JSON.stringify(this.props.user_info_i)!="{}"){                      
             if(JSON.stringify(this.state.user_info)!=JSON.stringify(this.props.user_info_i)){
                 console.log(this.props.user_info_i,12)
                this.setState({
                    isHas:true,
                    user_info:this.props.user_info_i
                },()=>{
                    localStorage.user=JSON.stringify(this.state.user_info)
                    console.log(this.state.user_info,13)
                })
            }
         }else{
             if((localStorage.user)!=""){
                this.setState({
                    isHas:true,
                    user_info:JSON.parse(localStorage.user)
                })
            }
         }
    }
    render() {
        
        return (
            <div>
                 {this.state.isHas?<LoginPersonComponent/>:<LoginComponent/>}
            </div>            
        )
    }
}

RootLoginComponent.defaultProps={
    
}

export default connect(state=>state)(RootLoginComponent)


