//import store from '../../flux/store.js'
//import actioncreator from '../../flux/actionCreator.js'
class LunboComponent extends React.Component {
   
    getLunboData(){
    	
	  	let lunbodata = this.props.lunbodata
    	if(lunbodata.length!=0){
    		let arr=[];
		  	lunbodata.result.focus.forEach((item,i)=>{
		  		//console.log(this)
		  		arr.push(<a href={item.url} className="swiper-slide">
					        	<img src={item.pic}/>
					        </a>)
		  	})
		  	return arr
    	}
  	

    }
    
    componentDidMount(){
    	
         this.mySwiper = new Swiper ('.swiper-container', {		    
		    loop: true,		    
		    pagination: '.swiper-pagination',		    
		    autoplay : 2000,
		  })   
		  
    }
    componentDidUpdate(){
    	this.mySwiper.update()
    }
    render(){       
        return (
            <div className="lunbo">
                <div className="swiper-container">
				    <div className="swiper-wrapper">
				        {this.getLunboData()}
				    </div>				   
				    <div className="swiper-pagination"></div>
				</div>
            </div>
        )
    }
}



export default LunboComponent