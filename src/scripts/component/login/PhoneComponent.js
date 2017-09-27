
import actions from "../../redux/actions";
import store from "../../redux/store"
import {Link} from "react-router"
require ("../common/gVerify")
import Fetch from "../../module/fetch"
class PhoneComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
                 username:'',
                 yanzheng:'',
                 message:'',
                 isShow1:false,
                 isShow2:false,
                 isShow3:false,
                 isReady:false,
                 array:[]
        }
    }
    changeValue(type,e){     
        if(type=='username'){
            this.setState({              
                isShow1:!this.state.isShow1
            })
        }else if(type=='yanzheng'){
            this.setState({             
                 isShow2:!this.state.isShow2
            })
        }else{
            this.setState({
                 isShow3:!this.state.isShow3
            })
        }     
        
    }
    
     changeValue_i(type,e){     
        if(type=='username'){
            this.setState({
                username:e.target.value,
            },()=>{
                this.show_change()
            })
        }else if(type=='yanzheng'){
            this.setState({
                yanzheng:e.target.value,
            },()=>{
                this.show_change()
            })
        }else{
            this.setState({
                message:e.target.value,
            },()=>{
                this.show_change()
            })
        }    
     }
    show_change(){  
        let e1=this.state.username
        let e2=this.state.yanzheng
        let e3=this.state.message
        let result1=/^1[3578]\d{9}$/.test(e1)
        if(!result1){
            this.setState({
                isReady:false
            })
            return("请输入正确的手机号")             
        }else if(e2==""){
            this.setState({
                isReady:false
            })
             return("请输入验证码")
        }else{
            return("true")
        }    
    }
    login_click(){
        let that=this
        if(this.show_change()=="true"){
            that.reduce(()=>{
                if(this.state.isRight){
                    Fetch.Get("http://localhost:9000/loho/uc/mobile/login/code/",{
                        captcha:'',
                        mobile:that.state.username,
                        type:""
                        }).then((res)=>{
                            return res.json()
                        }).then((json)=>{
                            console.log(json)
                            //  actions.user_n({
                            //         username:this.state.username,
                            //         yanzheng:this.state.yanzheng,
                            //         message:this.state.message
                            //     })
                        })      
                    }else{
                        alert("请输入正确的验证码")
                    }
                })
            }else{
                alert(this.show_change())
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
     componentDidMount(){
        var verifyCode = new GVerify("v_container1");
        let br=[];
         br.push(verifyCode)
         this.setState({
             array:br
         })
    }
    reduce(cb){
        var res = this.state.array[0].validate(document.getElementById("code_input1").value);
        if(res){
            this.setState({
                isRight:true
            })
        }else{
            this.setState({
                isRight:false
            })
        }
        cb()
    }    
    clickButton(obj){
        var obj = $(obj);
        obj.attr("disabled","disabled");/*按钮倒计时*/
        var time = 60;
        var set=setInterval(function(){
        obj.val(--time+"(s)");
        }, 1000);/*等待时间*/
        setTimeout(function(){
        obj.attr("disabled",false).val("重新获取验证码");/*倒计时*/
        clearInterval(set);
        }, 60000);
    }
    render() {
        return (
            <div className="login_form">
            <form className="login_input">
                <div className="login_inp">
                    <span className="iconfont icon-shouji login_font"></span>
                    <input type="text" maxLength="11" placeholder="请输入您的手机号码" className={this.state.isShow1?"back_style":""} onFocus={this.showBack.bind(this)} onChange={this.changeValue_i.bind(this,'username')} onBlur={this.changeValue.bind(this,'username')}/>
                </div>
                <div className="login_inp">
                    <span className="iconfont icon-yanzhengma login_font"></span>
                    <input type="text" maxLength="4" id="code_input1" placeholder="请输入图片验证码" className={this.state.isShow2?"back_style":""} onFocus={this.showBack1.bind(this)} onChange={this.changeValue_i.bind(this,'yanzheng')} onBlur={this.changeValue.bind(this,'yanzheng')}/>
                    <span className="sendy" id="v_container1" alt="验证码" title="点击更新验证码"></span>
                </div>
                <div className="login_inp">
                    <span className="iconfont icon-erweimaicon- login_font"></span>
                    <input type="text" placeholder="请输入短信验证" className={this.state.isShow3?"back_style":""} onFocus={this.showBack2.bind(this)} onChange={this.changeValue_i.bind(this,'message')} onBlur={this.changeValue.bind(this,'message')}/>                   
                    <span className="sendm" onClick={this.login_click.bind(this)}>发送验证码</span>
                </div>                
            </form> 
            <div className="login_footer">
                <div><Link to="/register">注册</Link></div>
                <div className={this.state.isReady?"login_click login_change":"login_click"}><Link>登录</Link></div>
            </div> 
            </div>
        )
    }
}

PhoneComponent.defaultProps={
     
}
export default PhoneComponent
