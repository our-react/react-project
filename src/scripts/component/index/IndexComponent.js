import LunboComponent from './LunboComponent'
import NavComponent from './NavComponent'
import AdvertiseComponent from './AdvertiseComponent'
import HotRecommendComponent from './HotRecommendComponent'
import Fetch from '../../module/fetch'
//import store from '../../flux/store.js'
//import actioncreator from '../../flux/actionCreator.js'
class IndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            data:[],
        }
    }
    componentWillMount(){   	
        this.getNavContent()
        //console.log(this.state.data)
    }
    getNavContent(props){
    	let that = this
        Fetch.Get('http://localhost:9000/list/index')
        	.then(res=>{return res.json()}).then(json=>{     
        	//console.log(json)	
            that.setState({
            	data:json
            })
        })
    }
   
    render(){ 
    
        return (
            <div>
                <LunboComponent lunbodata={this.state.data}/>
                <NavComponent navdata={this.state.data}/>
                <AdvertiseComponent advdata={this.state.data}/>
                <HotRecommendComponent hotdata={this.state.data}/>
            </div>
        )
    }
    
}
//定义默认属性
IndexComponent.defaultProps={
    
}



export default IndexComponent