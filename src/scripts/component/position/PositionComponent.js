
import HeaderComponent from "../common/HeaderComponent"
import NowCityComponent from "../position/NowCityComponent"
import HotCityComponent from "../position/HotCityComponent"
import AllCityComponent from "../position/AllCityComponent"

import GoTopComponent from "../common/GoTopComponent"


class PositionComponent extends React.Component {
    render() {
        return (
            <div className="login_full">
                <HeaderComponent data = {this.props}/>
                <NowCityComponent/>
                <HotCityComponent/>    
                <AllCityComponent/>  
                <GoTopComponent />   
            </div>     
        )
    }
}

PositionComponent.defaultProps={

        title: "选择城市"
    
}

export default PositionComponent


