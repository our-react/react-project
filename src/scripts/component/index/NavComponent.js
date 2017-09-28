
import {Link} from 'react-router'
class NavComponent extends React.Component {
    
    getNavData(){
    	
	  	let navdata = this.props.navdata
	  	
    	if(navdata.length!=0){
    		let arr=[];
		  	navdata.result.cates.forEach((item,i)=>{
		  		//console.log(this)

		  		
		  		arr.push(<Link to={'/newthings/'+item.tid+'/'+item.tag}  className="nav_box">
               		<img src={item.pic}/>
               		<p>{item.tag}</p>
               </Link>)
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



export default NavComponent