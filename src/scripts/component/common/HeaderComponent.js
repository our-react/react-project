import {Link} from 'react-router'

class HeaderComponent extends React.Component {

    showContent() {
        if(this.props.data.title) {
          return  <h4 className="logo">{this.props.data.title}</h4>
        }else if(this.props.data.title==undefined){
          return  <h4 className="logo"><img src="/images/index/logo.head.png" alt=""/></h4>
        }else {
            return <h4 className="logo"></h4>
        }
    }

    render() {
        return (
            <div className="header">
                <a className="header-left" href="/">{this.props.data.position}<span className={this.props.data.fanhui+" "+"iconfont"}></span></a>               
                <div className="header-right">
                   {
                      this.showContent() 
                   }
                    <Link href="/" className={"iconfont"+" "+this.props.data.gouwu+" "+"gouwu"}></Link>
                    <Link to="/register" className={"iconfont"+" "+this.props.data.login}></Link>
                </div>
             </div> 
           
        )
    }
}

export default HeaderComponent

// dangerouslySetInnerHTML={{__html: content}}
