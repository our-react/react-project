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
    render() {
        return (
            <div className="header">
                 {this.changing()}
                <h4 className="logo" >{this.props.data.title}</h4>
                <span><Link href="/" className={"iconfont"+" "+this.props.data.gouwu+" "+"gouwu"}></Link><Link to="/register" className={"iconfont"+" "+this.props.data.login}></Link></span>
             </div>         
        )
    }
}

export default connect(state=>state)(HeaderComponent)
