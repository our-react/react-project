
import HeaderComponent from "../common/HeaderComponent"
import NowCityComponent from "../position/NowCityComponent"
import HotCityComponent from "../position/HotCityComponent"
import AllCityComponent from "../position/AllCityComponent"


class PositionComponent extends React.Component {
    render() {
        return (
            <div className="login_full">
                <HeaderComponent data = {this.props}/>
                <NowCityComponent/>
                <HotCityComponent/>    
                <AllCityComponent/>     
            </div>     
        )
    }
}

PositionComponent.defaultProps={
        position: "",
        fanhui: "icon-iconback",
        title: "选择城市",
        gouwu: "icon-gouwuche",
        login: "icon-gengduo"
    
}

export default PositionComponent


