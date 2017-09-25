import Fetch from '../../module/fetch'

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
        this.getListData()     	
    }
	getGoodsList(){
		let goods = this.state.goods   	
		let that=this;
	    let arr=[];
	    if(goods.length!=0){
	    	goods.result.data.forEach((item,i)=>{
		    	arr.push(<div className="goodslist-bar">
		    				{item.isNew?<span className="isnew">New</span>:""}
							<img src={"http://image.loho88.com/"+item.img}/>
							<div className="goods_title">{item.title}</div>
							<span className="goodsprice">￥ {item.price}</span>
							<span className="goodsbuy">{item.salesNum}人已买</span>						
						</div>)
		    })
	    }	    
	    return arr;    	
	}	
	getListData(){
		let that = this
        Fetch.Get("http://localhost:9000/loho/search/?e=222&page=1",{
        }).then(res=>{
           return res.json()
        }).then(json=>{      
        	
        	that.setState({
            	goods:json
           })                         
        })
	}
	loadingMoreData(){
		let that = this
        Fetch.Get('http://localhost:9000/loho/search/?e=222&page=2',{
        }).then(res=>{
           return res.json()
        }).then(json=>{      
        	
        	that.setState({
            	moregoods:json
           })                         
        })
	}
	loadingMoreList(){
		let moregoods = this.state.moregoods   	
		let that=this;
	    let brr=[];
	    if(moregoods.length!=0){
	    	moregoods.result.data.forEach((item,i)=>{
		    	brr.push(<div className="goodslist-bar">
		    				{item.isNew?<span className="isnew">New</span>:""}
							<img src={"http://image.loho88.com/"+item.img}/>
							<div className="goods_title">{item.title}</div>
							<span className="goodsprice">￥ {item.price}</span>
							<span className="goodsbuy">{item.salesNum}人已买</span>						
						</div>)
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
			
			that.loadingMoreData()
			this.setState({
				isLoading:false
			})	
		}	
	}
	activeStyle(e){
		//console.log(e._targetInst._mountIndex)
		
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
				<div className="godslist_box">
					{this.state.isLoading?'':this.loadingMoreList()}				
				</div>
				{this.state.isLoading?'':<p className="bottom">已经到底部了</p>}
			</div>
		)
	}
}
export default CompreComponent