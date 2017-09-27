
import position  from "../../module/position"
import actions from "../../redux/actions"
import {connect} from 'react-redux'
import {Link} from "react-router"
class NowCityComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            now_position:'',
            getId:JSON.parse(localStorage.position).cityId,
            city_info:{},
            isGet:true
        }
    }
    componentWillMount(){
        
        if(localStorage.position){
            // console.log(JSON.parse(localStorage.position).cityName)
            this.setState({
                    now_position:JSON.parse(localStorage.position).cityName,
                })
        }   
     }
   
     componentDidUpdate(){
         let that=this
        if(this.state.isGet){
                this.setState({
                    city_info:this.props.city_info.list,
                    isGet:false
                })
          }
        if(this.props.now_city){          
             if(this.state.now_position!=this.props.now_city){
                this.setState({
                  now_position:this.props.now_city,
                  
             },()=>{
                 if(JSON.stringify(this.state.city_info)!="{}"){

                    let arr=this.state.city_info
                    for(var key in arr){
                    let obj=arr[key].filter(function(obj){
                        return obj.cityName==that.state.now_position
                    })[0]
                    if(obj){
                        that.setState({
                            getId:obj.cityId
                        })
                        break;
                    }                    
                }
                }
                })  
            }
        }
    }

    render(){
        return (
            <div className="nowcity">
                <p className="nowcity_now">
                    <span className="iconfont icon-iconfont-map-marker"></span>
                    <span>当前城市：{this.state.now_position}</span>
                </p>
                <Link to={"/nearby/"+this.state.getId} className="iconfont icon-arrow-right"></Link>             
            </div>           
        )
    }
}

NowCityComponent.defaultProps={
      
}

export default connect(state=>state)(NowCityComponent)
