
import HeaderComponent from '../common/HeaderComponent'
require("../common/gVerify.js")
import Fetch from '../../module/fetch'

class RegisterComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            telflag: false,
            passflag: false,
            upassflag: false,
            tuyzflag: false,
            show: false,
            tel: "",
            pass: "",
            upass:"",
            tuyz: "",
            text: ""
        }
    }
    handleChange(type,e) {
        if(type == "tel") {
            this.setState({
                tel: e.target.value
            })     
            let patt1 = /^1[34578]\d{9}$/;
            let tel = e.target.value      
            if(patt1.test(tel)){
                this.setState({
                    tel: e.target.value,
                    telflag: true,
                    text: ""
                })           
            }else {
                this.setState({
                    telflag: false,
                    text: "手机号错误",
                })
            }
        }else if(type == "tuyz") {   
            let that = this     
            this.setState({
                tuyz: e.target.value
            })  
            if(e.target.value) {
                let res = this.verifyCode.validate(document.getElementById("codeinput").value)
                    if(res) {
                        this.setState({                        
                            tuyzflag: true,
                            text: ""
                        })  
                    }else {
                        this.setState({ 
                            tuyzflag: false,                       
                            text: "验证码错误",
                        })  
                    } 
            } 
              
        }else if(type == "pass") {
             this.setState({
                pass: e.target.value
            })     
            let patt2 = /^\w{6,20}$/;
            let pass = e.target.value
            if(patt2.test(pass)){
                this.setState({
                    pass: pass,
                    passflag: true,
                    text: ""       
                })
            }else {
                this.setState({
                    passflag: false,
                    text: "密码格式不对"
                })    
            }          

        }else if(type == "upass") {
             this.setState({
                upass: e.target.value
            })     
            if(this.state.pass == e.target.value) {
                this.setState({
                    upass: e.target.value,
                    upassflag: true,
                    text: ""
                })          
            }else{
                this.setState({
                    upassflag: false,
                    text: "两次密码不同"
                })  
            }              
        }
    }
   
    yZClick() {           
        let that = this
        if(this.state.telflag&&this.state.passflag&&this.state.upassflag&&this.state.tuyzflag) {
            Fetch.Post("http://datainfo.duapp.com/shopdata/userinfo.php",{
                status: "register",
                userID: that.state.tel,
                password: that.state.pass
                }).then((res)=>{
                    return  res.json()
                }).then(json=>{
                    if(json==0){
                        alert("用户名重名")
                    }else if(json==1){
                        alert("注册成功")
                        location.href="/"
                    }
            })
        }     
    }
    componentDidMount() {
         this.verifyCode = new GVerify("container")
    }
  
   
  
    render() {
        return (
            <div className="register">
                <HeaderComponent data={this.props}/>
                <div className="form-list">
                    <form className="form-items" onSubmit={this.yZClick.bind(this)}>
                        <div className="form-item">
                            <label>手机号</label>
                            <input placeholder="请输入手机号" maxLength="11" onChange={this.handleChange.bind(this,"tel")} className="input" ref="tel" />
                        </div>
                        <div className="form-item">
                            <label>图形验证码</label>
                            <input id="codeinput" onBlur={this.handleChange.bind(this,"tuyz")} placeholder="请输入图形验证码" ref="yz"/>
                            <div id="container"></div>
                        </div>
                        <div className="form-item">
                            <label>验证码</label>
                            <input placeholder="请输入短信验证码"/>
                            <button type="button">发送验证码</button>
                        </div>
                        <div className="form-item">
                            <label>密码</label>
                            <input onChange={this.handleChange.bind(this,"pass")} placeholder="请输入6-20位数字 / 字母或符合组合" ref="pass"/>
                        </div>
                        <div className="form-item">
                            <label>确认密码</label>
                            <input onChange={this.handleChange.bind(this,"upass")} placeholder="请再输入一次" ref="upass"/>
                        </div>
                        <div className="agreement">
                            <p>完成注册表示您已看过并接受<a>《LOHO用户协议》</a></p>
                        </div>
                        <div className="register">
                            {
                                this.state.tel&&this.state.pass&&this.state.upass&&this.state.tuyz?
                                <button type="submit" style={{background:"#E8343B",coloe:"#fff"}} >完成注册</button> : <button type="submit" >完成注册</button>                                 
                            }                          
                        </div>                      
                    </form>
                  
                </div>
             </div> 
           
        )
    }
}

RegisterComponent.defaultProps={

        title: "手机快速注册"
}

export default RegisterComponent

