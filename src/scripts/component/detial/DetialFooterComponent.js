

import {Link} from 'react-router'


class DetialFooterComponent extends React.Component {

    render() {
        return (
            <div className="detial-footer">
                <div>
                    <span className="iconfont icon-icon23"></span>
                    <span>客服</span>
                </div>
                 <div>
                    <span  className="iconfont icon-shoucang"></span>
                    <span>收藏</span>
                </div>
                 <div className="jrgwc">
                    <Link to="/cart">加入购物车</Link>
                </div>
            </div>
            
        )
    }

    
}
DetialFooterComponent.defaultProps={
   
    
}

export default DetialFooterComponent