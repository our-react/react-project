
import HeaderComponent from './HeaderComponent'
import CartGoodsComponent from './CartGoodsComponent'
import {Link} from "react-router"

class CartComponent extends React.Component {



    render() {
        return (
            <div className="cart-page">
               <HeaderComponent />
               <div className="cart-login">
                   <span>登录后可同步电脑与手机购物车中的商品</span>
                   <Link to="/login">登录</Link>
               </div>
               <CartGoodsComponent />
            </div>            
        )
    }
    
}
CartComponent.defaultProps={
        
   
    
}



export default CartComponent