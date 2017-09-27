
import {Link} from 'react-router'

class AdvertiseComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
           src:''
        }
    }
    componentWillMount(){
        
    }
    getadvData(){
    	
	  	let advdata = this.props.advdata
	  	
    	if(advdata.length!=0){
    		let arr=[];		  	
	  		arr.push(<img src={advdata.result.ad[0].pic}/>)		  	
		  	return arr
    	}
    }
    render(){
       
        return (
            <a href={this.props.advdata.length!=0?this.props.advdata.result.ad[0].url:''} className="adv">
                {this.getadvData()}
            </a>
        )
    }
}
//定义默认属性
AdvertiseComponent.defaultProps={
    
}



export default AdvertiseComponent