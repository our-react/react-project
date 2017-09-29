import {Link} from 'react-router'
import Fetch from "../../module/fetch"
import position  from "../../module/position"
import {connect} from 'react-redux'

class HeaderComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            now_position:'',
            isGet:true,
            city_info:{},
            isLoad:true
        }
    }
    
    load(){
        let that=this
         if(localStorage.position){
            this.setState({
                    now_position: JSON.parse(localStorage.position).cityName,
                })
        }else{
             position((info)=>{ 
                 console.log(info)   
                that.setState({
                        now_position:info.address.slice(0,-1),
                    },()=>{                            
                            let arr=this.state.city_info
                                for(var key in arr){
                                let obj=arr[key].filter(function(obj){
                                    return obj.cityName==that.state.now_position
                                })[0]
                                if(obj){
                                    localStorage.position=JSON.stringify(obj)
                                    console.log(JSON.parse(localStorage.position).cityId)
                                    break;
                                }                    
                            }
                        })                                  
             })   
        }  
    }

    componentDidMount(){
        let that=this
        if(this.state.isLoad){
             Fetch.Get("http://localhost:9000/loho/store/clist/",{}).then((res)=>{
            return res.json()
           }).then((json)=>{
            this.setState({
                city_info:json.result.list,
                isLoad:false
            },()=>{
                that.load()
            })
           
         })
        }
        that.load()
     }
 
    changing(){
        let arr=[]
        if(this.props.data.position!=""){       
                arr.push(<Link to="/position">{this.state.now_position?this.state.now_position:"定位中.."}<span className="iconfont icon-fanhui-copy"></span></Link>)                  
        }else{
            arr.push( <Link to="/">{this.props.data.position}<span className="iconfont icon-fanhui-copy"></span></Link> )
        }
        return arr
    }

    showContent() {      
        if(this.props.data.title) {
          return  <h4 className="logo">{this.props.data.title}</h4>
        }else if(this.props.data.title==""){
          return 
        }else {
            return <h4 className="logo"></h4>
        }
    }

    render() {
        return (
            <div className="header">
                <div className="header-nav"> 
                        {this.changing()}           
                    <div className="header-right">
                        <h4 className="logo"><img src="/images/index/logo.head.png" alt=""/></h4>
                        <Link to="/cart" className="iconfont icon-gouwuche gouwu"></Link>
                        <Link to="/login" className="iconfont icon-wode1"></Link>
                    </div>
                </div>
             </div> 
        )
    }
}

export default HeaderComponent



