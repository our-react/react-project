
import {Link} from 'react-router'

class HotRecommendComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
           
        }
    }
    componentWillMount(){
        
    }
    gethotData(){    
    	let hotdata = this.props.hotdata
    	if(hotdata.length!=0){
    		let that=this;
		    let arr=[];
		    hotdata.result.popular.show.forEach((item,i)=>{
		    	arr.push(<Link to={"/detial/"+item.gid} className="hotRecommend_content--box">
		                	<p>{item.tag}</p>
		                	<h2>{item.tag_en}</h2>
		                	<img src={item.pic}/>
		                </Link>)
		    })
		    return arr;
    	}
	    
    }
    render(){
       
        return (
            <div className="hotRecommend">
                <div className="hotRecommend_head">
                	<div className="redbox"></div>
                	<h3 className="hotRecommend_head--title">{this.props.hotdata.length!=0?this.props.hotdata.result.popular.title.word:''}</h3>
                	<a className="hotRecommend_head--more" href={this.props.hotdata.length!=0?this.props.hotdata.result.popular.more.url:''}>{this.props.hotdata.length!=0?this.props.hotdata.result.popular.more.word:''}</a>
                </div>
                <a href={this.props.hotdata.length!=0?this.props.hotdata.result.popular.img.url:''} className="hotRecommend_adv">
                	<img src={this.props.hotdata.length!=0?this.props.hotdata.result.popular.img.pic:''}/>
                </a>
                <div className="hotRecommend_content">
                	{this.gethotData()}
                </div>
            </div>
        )
    }
}
//定义默认属性
HotRecommendComponent.defaultProps={
    
}



export default HotRecommendComponent