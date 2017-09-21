import {Link} from 'react-router'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="/">北京市<span className="iconfont icon-fanhui-copy"></span></a>
                <h4 className="logo" >LOHO</h4>
                <span><Link href="/" className="iconfont icon-gouwuche gouwu"></Link><Link to="/login" className="iconfont icon-wode1"></Link></span>
             </div> 
           
        )
    }
}

export default HeaderComponent


