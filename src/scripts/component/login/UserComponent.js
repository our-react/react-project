
import actions from "../../redux/actions"
import {Link} from "react-router"
// import $ from "jquery"
require ("../common/gVerify")
class UserComponent extends React.Component {
     constructor(props,context){
        super(props,context)
        this.state={
            phone_number:null,
            password:'',
            yanzheng_i:'',
            isShow1:false,
            isShow2:false,
            isShow3:false,
            isRight:false,
            isReady:false,
            array:[]
        }
    }
     changeValue(type,e){    
        if(type=='phone_number'){
            this.setState({
                 isShow1:!this.state.isShow1
            })
        }else if(type=='password'){
            this.setState({
                 isShow2:!this.state.isShow2
            })
        }else{
            this.setState({
                isShow3:!this.state.isShow3
            })
            
        }  
    }
    changeValue_c(type,e){    
        if(type=='phone_number'){
            this.setState({
                phone_number:e.target.value,             
            },()=>{
                this.show_change()
            })
        }else if(type=='password'){
            this.setState({
                password:e.target.value,            
            },()=>{
                this.show_change()
            })
        }else{
            this.setState({
                yanzheng_i:e.target.value,              
            },()=>{
                this.show_change()
            })
            
        }  
    }
    showBack(){
        this.setState({
            isShow1:!this.state.isShow1,           
        })
    }
     showBack1(){
        this.setState({
            isShow2:!this.state.isShow2,           
        })
    }
     showBack2(){
        this.setState({
            isShow3:!this.state.isShow3,           
        })
    }
     login_click(e){
         e.preventDefault()   
         let that=this
        //  console.log(this.state.phone_number,this.state.password,this.state.yanzheng_i,5)
        if(this.show_change()=="true"){
            that.reduce()
         if(!this.state.isPhone){
                $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    data:{
                        status:"login",
                        userID:that.state.phone_number,
                        password:that.state.password
                    },
                    success(results){   
                       actions.user_i({
                            phone_number:that.state.phone_number,
                            password:that.state.password,
                            yanzheng_i:that.state.yanzheng_i
                        })  
                        if(results==0){
                            alert("用户名不存在！")
                        }else if(results==2){
                            alert("用户名密码不符！")
                        }else{                        
                            if(that.state.isRight){
                                // console.log(1111)
                                location.href="http://localhost:9000/#/login"
                            }else{
                                alert("验证码错误")

                            }                                               
                        }         
                }
            })
         }
        }else{
            alert(this.show_change())
        }   
    }
    componentDidMount(){
         var verifyCode = new GVerify("v_container")
         let br=[];
         br.push(verifyCode)
         this.setState({
             array:br
         })
       
    } 
    reduce(){
        var res = this.state.array[0].validate(document.getElementById("code_input").value);
        if(res){
            this.setState({
                isRight:true
            })
        }else{
            this.setState({
                isRight:false
            })
        }
    }
    show_change(){
        let e1=this.state.phone_number
        let e2=this.state.password
        let e3=this.state.yanzheng_i
        let result1=/^1[3578]\d{9}$/.test(e1)
        let result2=/\w{6,20}/.test(e2)         
       if(!result1){
           this.setState({
                isReady:false
            })
            return("请输入正确的手机号")
        }else if(!result2){
            this.setState({
                isReady:false
            })
            return("密码应在6-20位之间")
        }else if(e3==""){
            this.setState({
                isReady:false
            })
            return("请输入验证码")
        }else{          
             this.setState({
                isReady:true
            })
            return("true")    
        } 
    }
    render() {
        return (
            <div className="login_form">
            <form className="login_input">
                <div className="login_inp">
                    <span className="iconfont icon-lianxiren login_font"></span>
                    <input type="text" maxLength="11" placeholder="请输入手机号" className={this.state.isShow1?"back_style":""} onFocus={this.showBack.bind(this)} onChange={this.changeValue_c.bind(this,'phone_number')} onBlur={this.changeValue.bind(this,'phone_number')}/>
                </div>
                <div className="login_inp">
                    <span className="iconfont icon-mima login_font"></span>
                    <input type="text" placeholder="请输入密码" className={this.state.isShow2?"back_style":""} onFocus={this.showBack1.bind(this)}  onChange={this.changeValue_c.bind(this,'password')} onBlur={this.changeValue.bind(this,'password')}/>                   
                </div>
                <div className="login_inp">
                    <span className="iconfont icon-yanzhengma login_font"></span>
                    <input type="text" maxLength="4" id="code_input" placeholder="请输入验证码" className={this.state.isShow3?"back_style":""} onFocus={this.showBack2.bind(this)} onChange={this.changeValue_c.bind(this,'yanzheng_i')} onBlur={this.changeValue.bind(this,'yanzheng_i')}/>                   
                    <span className="sendy" id="v_container" alt="验证码" title="点击更新验证码"></span>
                </div>

                
            </form> 
            <a href="" className="forget">忘记密码？</a>
           <div className="login_footer">
                <div><Link to="/register">注册</Link></div>
                <div className={this.state.isReady?"login_click login_change":"login_click"} onClick={this.login_click.bind(this)}><Link>登录</Link></div>
            </div> 
            </div>
        )
    }
}

export default UserComponent
