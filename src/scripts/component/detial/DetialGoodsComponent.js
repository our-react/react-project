

import {Link} from 'react-router'

class DetialGoodsComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            tuwei: false,
            pingjia: true,
            canshu: true
        }
    }
  
    getGoods() {
        let goodsstr=[]
        if(this.props.goods.txtcontent) {
            goodsstr = this.props.goods.txtcontent
            goodsstr= goodsstr.replace(/\ssrc="/g, ' hsrc="');
            goodsstr= goodsstr.replace(/vip-src="/g, 'src="http://image.loho88.com');
            goodsstr= goodsstr.replace(/data-src="/g, 'src="http://image.loho88.com');   
        }
        return goodsstr
    }
    getCanShu() {
        let goodsCanShu = []
        if(this.props.goods.arguments) {
            this.props.goods.arguments.forEach((item, i)=>{
                goodsCanShu.push(
                    <li><span>{item.tname}</span><span>{item.val}</span></li>
                )
            })
            return goodsCanShu
        }
    }
    getPeddle() {
        let goodsPeddle=[]
        if(this.props.peddle) {
            this.props.peddle.forEach((item, i)=>{
                goodsPeddle.push(
                    <Link to={"/detial/"+item.goodsId} onClick={this.handleChangeHash.bind(this)}>
                        <img src={"http://image.loho88.com/"+item.img}/>
                        <span>{item.title}</span>
                        <span><span className="peddle-price">&yen;{item.price}</span><span>{item.salesNum}人已买</span></span>
                    </Link>
                )
            })
            return goodsPeddle
        }
    }
    handleChangeHash() {
        location.reload()
    }
    getPingJia() {
        let goodsPingJia=[]
        for(let i=0; i<8; i++){
            goodsPingJia.push(
                <div className="pingjia">
                    <p>有点贵，眼镜店帮我原价下单也不领优惠卷，度数也验错了后来重新返厂做了，也忘了帮我摩薄，晕</p>
                    <p><span>lhsj_183******095</span> <span>2017年09月18日&nbsp;&nbsp;  07:17:35</span></p>
                    <p>店铺： 长安万科广场mall店</p>
                </div>
            )
        }
        return goodsPingJia
    }
    handlTabs(type, e) {
       if(type=="tuwei") {
           this.setState({
               tuwei: false,
               pingjia: true,
               canshu: true
           })
       }
        if(type=="pingjia") {
           this.setState({
               tuwei: true,
               pingjia: false,
               canshu: true
           })
       }
        if(type=="canshu"){
           this.setState({
               tuwei: true,
               pingjia: true,
               canshu: false
           })
       }
    }

    render() {
        
        let content = this.getGoods()
        return (
            <div className="detial-goods">
                <ul className="goods-message">
                    <li className={"goods-message-item"+" "+(this.state.tuwei?"":"active")} onClick={this.handlTabs.bind(this,"tuwei")}>图文详情</li>
                    <li className={"goods-message-item"+" "+(this.state.pingjia?"":"active")} onClick={this.handlTabs.bind(this, "pingjia")}>商品评价</li>
                    <li className={"goods-message-item"+" "+(this.state.canshu?"":"active")} onClick={this.handlTabs.bind(this, "canshu")}>商品参数</li>
                </ul>
                <div className="goods-tab">
                    <div className="goods-tuwei" style={this.state.tuwei?{display:"none"}:{}} >
                        <div  dangerouslySetInnerHTML={{__html: content}} ></div>
                         <div className="kan-kan">
                            <span></span>
                            <span>看了又看</span>
                            <span></span>
                        </div> 
                        <div className="good-footer">
                            <span></span>
                            <span>已经到底了</span>
                            <span></span>
                        </div>             
                    </div>

                    <div className="goods-pingjia" style={this.state.pingjia?{display:"none"}:{}} >
                        {this.getPingJia()}
                        <div className="max-pingjia">没有更多评价了（8）</div>
                        <div className="kan-kan">
                            <span></span>
                            <span>看了又看</span>
                            <span></span>
                        </div> 
                        <div className="goods-peddle">
                             {this.getPeddle()} 
                        </div> 
                        <div className="good-footer">
                            <span></span>
                            <span>已经到底了</span>
                            <span></span>
                        </div>                                        
                    </div>

                    <div className="goods-canshu" style={this.state.canshu?{display:"none"}:{}}>
                        <ul>
                             {this.getCanShu()} 
                        </ul>

                        <div className="kan-kan">
                            <span></span>
                            <span>看了又看</span>
                            <span></span>
                        </div> 
                        <div className="goods-peddle">
                             {this.getPeddle()} 
                        </div> 
                        <div className="good-footer">
                            <span></span>
                            <span>已经到底了</span>
                            <span></span>
                        </div>                      
                    </div>
                </div>
               
               
            </div>
            
        )
    }

    
}
DetialGoodsComponent.defaultProps={
      
    
    
}

export default DetialGoodsComponent