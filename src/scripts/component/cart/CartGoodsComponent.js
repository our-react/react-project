
class CartGoodsComponent extends React.Component {

    render() {
        return (
            <div className="cart-good">
                <div className="good-top">
                    <div className="good-top-left">
                        <input type="checkbox"/>
                        <span>单品</span>
                    </div>
                    <div className="good-top-right">
                        <span>&yen; 199</span>
                    </div>
                </div>
                <div className="good-middle">
                    <div className="good-middle-left">
                        <img src="http://image.loho88.com/images/201707/G_1499468235854495329.jpg" />
                    </div>
                    <div className="good-middle-right">
                        <h6>LOHO光学镜架 板材 蓝花色 时尚款 LH06001-C26</h6>
                        <span className="good-color">蓝色 ： 蓝花色</span>
                        <span className="good-price"><span>&yen; 199</span><span>×1</span></span>
                    </div>
                </div>
                <div className="good-bottom">
                    <div className="good-bottom-left">
                        <span className="iconfont icon-shanchu left-span1"></span>
                        <span className="left-span2">促销优惠</span>
                    </div>
                    <div className="good-bottom-right">
                         <span className="iconfont icon-jian"></span>
                        <span>1</span>
                        <span className="iconfont icon-jia"></span>
                    </div>                    
                </div>

                <div className="cart-footer">
                    <p>合计 （ 不含运费 ） ：<span> &yen; 798</span></p>
                    <button type="submit">结算</button>
                </div>
            </div>
        )
    }

}
export default CartGoodsComponent