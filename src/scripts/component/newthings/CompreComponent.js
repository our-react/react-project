import Fetch from '../../module/fetch'
import {Link} from 'react-router'

class CompreComponent extends React.Component{
	constructor(props,context) {
        super(props,context)
        this.state={        	
        	goods:[],

        	moregoods:[],
        	isLoading:true       	
        }
    }
	componentWillMount() {
        this.getListData(this.props.data.url1,(json)=>{
        	this.setState({
	        	goods:json
	       })  
        })

    }
	componentDidMount(){
		
	}
	getGoodsList(){
		let goods = this.state.goods   	
		let that=this;
		let arr=[];
	
	    if(goods.length!=0){

	    	goods.result.data.forEach((item,i)=>{
		    	arr.push(<Link className="goodslist-bar" to={"/detial/"+item.goodsId}>
		    				{item.isNew?<span className="isnew">New</span>:""}
							<img src={"http://image.loho88.com/"+item.img}/>
							<div className="goods_title">{item.title}</div>
							<span className="goodsprice">￥ {item.price}</span>
							<span className="goodsbuy">{item.salesNum}人已买</span>						
						</Link>)
		    })
	    }	    
	    return arr;    	
	}	
	getListData(url,cb){

		let that = this
        Fetch.Get(url,{
        }).then(res=>{
           return res.json()
        }).then(json=>{      

        	cb(json)        	                      

        })
	}

	

	loadingMoreList(){
		let moregoods = this.state.moregoods   	
		let that=this;
	    let brr=[];
	    if(moregoods.length!=0){
	    	moregoods.result.data.forEach((item,i)=>{
		    	brr.push(<Link className="goodslist-bar" to={"/detial/"+item.goodsId}>
		    				{item.isNew?<span className="isnew">New</span>:""}
							<img src={"http://image.loho88.com/"+item.img}/>
							<div className="goods_title">{item.title}</div>
							<span className="goodsprice">￥ {item.price}</span>
							<span className="goodsbuy">{item.salesNum}人已买</span>						
						</Link>)
		    })
	    }	    
	    return brr;    	
	}

	loadingMore(){
		let ch=document.documentElement.clientHeight||document.body.clientHeight;
		let st=document.documentElement.scrollTop||document.body.scrollTop;
		let sh=document.documentElement.scrollHeight||document.body.scrollHeight;
		let that=this;

		if(ch+st==sh&&this.state.isLoading){						
			that.getListData(this.props.data.url2,(json)=>{
				that.setState({
	            	moregoods:json
	           })            
			})
			this.setState({

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