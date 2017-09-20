
import {Link} from 'react-router'
class NavComponent extends React.Component {
    constructor(props,context){
        super(props,context)

        this.state={
            
        }
    }
    componentWillMount(){
        
    }
    getNavData(){
    	
	  	let navdata = this.props.navdata
	  	
    	if(navdata.length!=0){
    		let arr=[];
		  	navdata.result.cates.forEach((item,i)=>{
		  		//console.log(this)
		  		arr.push(<a href='#' className="nav_box">
               		<img src={item.pic}/>
               		<p>{item.tag}</p>
               </a>)
		  	})
		  	return arr
    	}
//	  	

    }
    render(){
       
        return (
            <div className="nav">
               {this.getNavData()}
            </div>
        )
    }
}
//定义默认属性
NavComponent.defaultProps={
    
}



export default NavComponent