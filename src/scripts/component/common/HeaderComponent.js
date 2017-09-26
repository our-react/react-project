import {Link} from 'react-router'

import position  from "../../module/position"
import {connect} from 'react-redux'

class HeaderComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            now_position:'',
            isGet:true
        }
    }
    componentDidMount(){
        if( localStorage.position){
            this.setState({
                    now_position: localStorage.position,
                })
        }else{
             position((info)=>{       
            this.setState({
                    now_position:info.address.slice(0,-1),
                },()=>{   
                     localStorage.position=this.state.now_position
                })
        })
        }
       
     }
 
    changing(){
        let arr=[]
        if(this.props.data.position!=""){       
                arr.push(<Link to="/position">{this.state.now_position}<span className={this.props.data.fanhui+" "+"iconfont"}></span></Link>)
                   
        }else{
            arr.push( <Link to="/">{this.props.data.position}<span className={this.props.data.fanhui+" "+"iconfont"}></span></Link> )
        }
        return arr
    }

    showContent() {
        if(this.props.data.title) {
          return  <h4 className="logo">{this.props.data.title}</h4>
        }else if(this.props.data.title==""){
          return  <h4 className="logo"><img src="/images/index/logo.head.png" alt=""/></h4>
        }else {
            return <h4 className="logo"></h4>
        }
    }

    render() {
        return (
            <div className="header">
                    {this.changing()}           
                <div className="header-right">
                   {
                      this.showContent() 
                   }
                    <Link href="/" className={"iconfont"+" "+this.props.data.gouwu+" "+"gouwu"}></Link>
                    <Link to="/login" className={"iconfont"+" "+this.props.data.login}></Link>
                </div>
             </div> 
           

        )
    }
}


export default HeaderComponent


