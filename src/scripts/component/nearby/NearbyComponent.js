import Fetch from '../../module/fetch'
import HeaderComponent from '../common/HeaderComponent'
import NearbyListComponent from './NearbyListComponent'
import NearbyPositionComponent from './NearbyPositionComponent'
class NearbyComponent extends React.Component {
	constructor(props,context) {
        super(props,context)
        this.state={
        	isRed:true,
        	data:'',
        	count:''
        }
    }
	changeNavStyle(){
		this.setState({
			isRed:true
		})
	}
	changeNavStyle1(){
		this.setState({
			isRed:false
		})
	}
	getData(url,cb){
		let that = this
        Fetch.Get(url,{
        }).then(res=>{
           return res.json()
        }).then(json=>{      
        	cb(json)                      
        })
	}
	componentWillMount() {
		let that=this;
		
		if(that.state.isRed){
			that.getData("http://localhost:9000/loho/store/count",(json)=>{
				//console.log(json)
				that.setState({
					count:json
				})
			})
			that.getData("http://localhost:9000/loho/store/302",(json)=>{
				//console.log(json)
				that.setState({
					data:json
				})
				console.log(this.state.data)
				
			})
		}             	
    }
    render(){
        return (
            <div >
                <HeaderComponent data={this.props}/>
                <div className="nearbyNav">
                	<ul>
                		<li className={this.state.isRed?'active':''} onClick={this.changeNavStyle.bind(this)}>列表<span></span></li>
                		<li className={this.state.isRed?'':'active'} onClick={this.changeNavStyle1.bind(this)}>地图</li>                		
                	</ul>
                	
                </div>
                {this.state.isRed?<NearbyListComponent listdata={this.state}/>:<NearbyPositionComponent/>}
             </div> 
            
        )
    }
}
NearbyComponent.defaultProps={
        position:"",
        fanhui: "icon-iconback",
        title: "查找体验店",
        gouwu: "icon-gouwuche",
        login: "icon-gengduo"   
}
export default NearbyComponent
