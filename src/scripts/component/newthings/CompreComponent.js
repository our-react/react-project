import Fetch from '../../module/fetch'
import {Link} from 'react-router'

class CompreComponent extends React.Component{
	constructor(props,context) {
        super(props,context)
        this.state={        	
        	goods:[],
        	isLoading:true
        }
    }
	componentWillMount() {
		let that=this;
		
        that.getListData(that.props.data.url1)
        
        	                
        
    }
	componentDidMount(){
		
	}
	getGoodsList(){
		let goods = this.state.goods   	
		let that=this;
		let arr=[];
	
	    if(goods.length!=0){
	    	
	    	for(let j=0;j<goods.length;j++){
	    		goods[j].result.data.forEach((item,i)=>{
			    	arr.push(<Link className="goodslist-bar" to={"/detial/"+item.goodsId}>
			    				{item.isNew?<span className="isnew">New</span>:""}
								<img src={"http://image.loho88.com/"+item.img}/>
								<div className="goods_title">{item.title}</div>
								<span className="goodsprice">￥ {item.price}</span>
								<span className="goodsbuy">{item.salesNum}人已买</span>						
							</Link>)
			    })
	    	}
	    	
	    }	    
	    return arr;    	
	}	
	getListData(url){
		let that = this
        Fetch.Get(url,{
        }).then(res=>{
           return res.json()
        }).then(json=>{      
        	let _goods=that.state.goods;
        	
        	_goods.push(json)
        	that.setState({
	        	goods:_goods
	       
	       })      	                      
        })
	}

	

	loadingMore(){
		let ch=document.documentElement.clientHeight||document.body.clientHeight;
		let st=document.documentElement.scrollTop||document.body.scrollTop;
		let sh=document.documentElement.scrollHeight||document.body.scrollHeight;
		let that=this;
		//console.log(that.state.count)
		if(ch+st==sh&&that.state.isLoading){
			that.setState({
				isLoading:false
			})
			that.getListData(that.props.data.url2)
			
		}	
		
	}

	render(){
		return(
			<div className="goodsList">				
				<div className="godslist_box" onWheel={this.loadingMore.bind(this)}>
					{this.getGoodsList()}				
				</div>
				{
					this.state.isLoading?<div className="loadingmore">正在加载更多中</div>:''
				}				
				{this.state.isLoading?'':<p className="bottom">已经到底部了</p>}
			</div>
		)
	}
}
export default CompreComponent