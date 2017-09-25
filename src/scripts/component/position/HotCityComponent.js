
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
            // console.log(this.state.city.hot)
            actions.city_info(this.state.city)
        })
    }
    add_hot(){
        let arr=[]
       if(JSON.stringify(this.state.city) == "{}"){
            return arr
        }else{
            this.state.city.hot.forEach((item,i)=>{
                arr.push(<Link to="/" className="hot_country">{item.cityName}</Link>)
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
        // console.log(obj)
        this.setState({
            _id:obj.cityId
        })
        that.goCity(obj.cityId)
    }
    // goCity(num){
    //     console.log(this.state._id)
    //     Fetch.Get("http://localhost:9000/loho/store/"+num,{}).then((res)=>{
    //         return res.json()
    //     }).then((json)=>{
            
    //       console.log(json)
          
    //     })
    // }
    componentDidMount(){
        var that=this
        $(".hotcity_hot").on("click",".hot_country",function(){
            // console.log()
            that.findId(that,$(this).html())
            localStorage.position=$(this).html()
            actions.getPosition(localStorage.position)
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


