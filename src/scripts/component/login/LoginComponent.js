
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

        title: "登录"   
}

export default LoginComponent


