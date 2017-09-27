
import Fetch from "../../module/fetch"
import actions from "../../redux/actions"
import {Link} from 'react-router'
class HotCityComponent extends React.Component {
      constructor(props,context){
        super(props,context)
        this.state={
            city:{},
            _id:null    
        }
      }
    hot_getDate(){
        let that=this
        Fetch.Get("http://localhost:9000/loho/store/clist/",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
                city:json.result
            })
            actions.city_info(this.state.city)
        })
    }
    add_hot(){
        let arr=[]
       if(JSON.stringify(this.state.city) == "{}"){
            return arr
        }else{
            this.state.city.hot.forEach((item,i)=>{
                arr.push(<Link to={"/nearby/"+this.state._id} className="hot_country">{item.cityName}</Link>)
            })
        }
        return arr
    }
    componentWillMount(){
        this.hot_getDate()
    }
    findId(type,str){   
        var that=type      
        let arr=that.state.city.hot
        let obj=arr.filter(function(obj){
            return obj.cityName==str+''
        })[0]
        localStorage.position=JSON.stringify(obj)
        this.setState({
            _id:obj.cityId
        })
    }
    
    componentDidMount(){
        var that=this
        $(".hotcity_hot").on("click",".hot_country",function(){           
            that.findId(that,$(this).html())
            actions.getPosition(JSON.parse(localStorage.position).cityName)
        })
    }
    render() {
        return (
            <div className="hotcity">
                <p>热门城市</p>
                <div className="hotcity_hot">
                      {this.add_hot()}  
                </div>         
            </div> 
            
        )
    }
}

HotCityComponent.defaultProps={
 
}
export default HotCityComponent


