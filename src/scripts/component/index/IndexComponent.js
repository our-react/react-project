
import LunboComponent from './LunboComponent'
import NavComponent from './NavComponent'
import AdvertiseComponent from './AdvertiseComponent'
import HotRecommendComponent from './HotRecommendComponent'
import HeaderComponent from "./HeaderComponent"
import ListComponent from "./ListComponent"
import FooterComponent from "./FooterComponent"

import GuessComponent from "./GuessComponent"

import FootadComponent from "./FootadComponent"

import GoTopComponent from "./GoTopComponent"
import Fetch from '../../module/fetch'
import store from '../../flux/store'
import actions from '../../flux/actions'


class IndexComponent extends React.Component {

    constructor(props,context) {
        super(props,context)
        this.state={
        	data:[],
            list:store.getIndexData()
        }
    }

    componentWillMount() {
       let that = this
        Fetch.Get("http://localhost:9000/loho/index",{
        }).then(res=>{
           return res.json()
        }).then(json=>{      
        	that.setState({
            	data:json
            })
            actions.addIndexData(json.result)                
        })
     
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                <LunboComponent lunbodata={this.state.data}/>
                <NavComponent navdata={this.state.data}/>
                <AdvertiseComponent advdata={this.state.data}/>
                <HotRecommendComponent hotdata={this.state.data}/>
                <ListComponent  />
                <GuessComponent/>
                <FooterComponent/>
                <FootadComponent/>
                <GoTopComponent/>
            </div>
            
        )
    }

    
}

export default IndexComponent