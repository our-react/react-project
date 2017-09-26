
import $ from 'jquery'
class NearbyListComponent extends React.Component {
	getdataList(){
		let data = this.props.listdata.data	
		let that=this;
	    let arr=[];
	    if(data.length!=0){
	    	data.result.stores.forEach((item,i)=>{
		    	arr.push(<div className="address_box">
		               		<div className="address_box--top">
		               			<b>{item.chineseName}</b>
		               			<span className="iconfont icon-insta360logo12" ref="change"></span>
		               		</div>
		               		<div className="address_box--bottom">
		               			<div className="iconfont icon-iconfont-map-marker"></div>
		               			<img src={'http://image.loho88.com/'+item.store_image}/>
		               			<div className='address'>{item.chineseAddress}</div>
		               			<button>免费预约直营店验光</button>
		               			<span className="iconfont icon-phone01"></span>
		               		</div>
	               		</div>)
		    })
	    }	    
	    return arr;    	
	}	
	hide(){
		console.log(this.refs.change.parent())
	}
    render(){
        return (
            <div>
               <div className="position_box">
	                <a className="chooseaddress">
               			<span>{this.props.listdata.data.length==0?'':this.props.listdata.data.result.city}</span>
               			<span className="iconfont icon-arrow-right"></span>
               		</a>
               		<div className="position_count">
               			<span>{this.props.listdata.data.length==0?'':this.props.listdata.data.result.city}</span>共
               			<span>{this.props.listdata.data.length==0?'':this.props.listdata.data.result.stores.length}</span>家体验店
               			(全国<span className="allCount">{this.props.listdata.count.length==0?'':this.props.listdata.count.result}</span>家)
               		</div>     
               	
               			{this.getdataList()}
               		
               		
               </div>
               
             </div> 
            
        )
    }
}

export default NearbyListComponent
