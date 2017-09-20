//import store from '../../flux/store.js'
//import actioncreator from '../../flux/actionCreator.js'
class LunboComponent extends React.Component {
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    getLunboData(){
    	
	  	let lunbodata = this.props.lunbodata
	  	console.log(lunbodata)
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
    
    componentWillMount(){
        

    }
    componentDidMount(){
    	
         this.mySwiper = new Swiper ('.swiper-container', {		    
		    loop: true,		    
		    // 如果需要分页器
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
//定义默认属性
LunboComponent.defaultProps={
    
}



export default LunboComponent