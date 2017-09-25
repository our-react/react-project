



class DetialLunBoComponent extends React.Component {

    getLunboData(){  	
        let lunbo = this.props.lunbo
        if(lunbo.length!=0){
            let arr=[]
            lunbo.info.pics.forEach((item, i)=>{
                let  itemImg = "http://image.loho88.com/"+item
            arr.push(<a href="/" className="swiper-slide">
                        <span className="lunbo-top"></span>
                        <img src={itemImg} />
                        <span className="lunbo-button"></span>
                    </a>
                )
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

    render() {
        return (
            <div className="detial-lunbo">
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
DetialLunBoComponent.defaultProps={
      
    
    
}

export default DetialLunBoComponent