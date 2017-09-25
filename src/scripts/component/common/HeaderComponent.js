import {Link} from 'react-router'

class HeaderComponent extends React.Component {

    render() {
        return (        	
            <div className="header">
                <a href="/">{this.props.data.position}<span className={this.props.data.fanhui+" "+"iconfont"}></span></a>
                <h4 className="logo" >{this.props.data.title}</h4>
                <span><Link href="/" className={"iconfont"+" "+this.props.data.gouwu+" "+"gouwu"}></Link><Link to="/register" className={"iconfont"+" "+this.props.data.login}></Link></span>
             </div>         
        )
    }
}

export default HeaderComponent