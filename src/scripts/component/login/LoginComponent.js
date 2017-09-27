
import HeaderComponent from "../common/HeaderComponent"
import BinnerComponent from "./BinnerComponent"
import InfoComponent from "./InfoComponent"

class LoginComponent extends React.Component {
    render() {
        return (
            <div className="login_fa">
                <HeaderComponent data = {this.props}/>
                <BinnerComponent/> 
                <InfoComponent/>               
            </div>            
        )
    }
}

LoginComponent.defaultProps={
        position: "",
        fanhui: "icon-iconback",
        title: "登录",
        gouwu: "icon-gouwuche",
        login: "icon-gengduo"
    
    
}

export default LoginComponent


