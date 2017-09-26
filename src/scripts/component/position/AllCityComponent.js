
import {connect} from 'react-redux'
import Fetch from "../../module/fetch"
import actions from "../../redux/actions"
import {Link} from 'react-router'

class AllCityComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            city_info:{},
            isHas:true,
            isShow:true,
            city_position:[],
            _id:null
        }
      }
    componentDidUpdate(){  
        let that=this
        if(this.state.isHas){
            this.setState({
                city_info:this.props.city_info
            })           
            this.setState({
                isHas:false
            })
        }
        if(this.state.isShow){
            let crr=[]
            let ps=Array.from(document.getElementsByClassName("list_tm"));
            if(ps.length>0){
                this.setState({
                    isShow:false
                })
                ps.forEach((item,i)=>{
                    let tp=item.offsetTop
                    crr.push(tp)
                })   
                this.setState({
                    city_position:crr
                })
                 $(".swi-slide").on("click",".list_cy",function(){                   
                    that.findId(that,$(this).html())
                        actions.getPosition(JSON.parse(localStorage.position).cityName)

                })
            }
        }
    }
     findId(type,str){   
        var that=type      
        let arr=that.state.city_info.list
        for(var key in arr){
            let obj=arr[key].filter(function(obj){
                return obj.cityName==str+''
            })[0]
            if(obj){
                localStorage.position=JSON.stringify(obj)
                this.setState({
                    _id:obj.cityId
                })
                break;
            }                    
        }       
    }
    wrapper(){
        let arr=[]
            if(JSON.stringify(this.state.city_info) == "{}"){
            return arr
        }else{
             let obj=this.state.city_info.list
            for(var key in obj){
                let _arr=[]
                obj[key].forEach((item,i)=>{
                    _arr.push(<li className="list"><Link to={"/nearby/"+this.state._id} className="list_cy">{item.cityName}</Link></li>)  
                })              
                arr.push(<div className="swi-slide">
                    <p  className="list_tm">{key}</p>
                    <ul>
                        {_arr}
                    </ul>
                </div>)
            }
            this.jumpcity()
            return arr
        }
        }  
    pagination(){
        let arr=[]
        if(JSON.stringify(this.state.city_info) == "{}"){
            return arr
        }else{
            this.state.city_info.letters.forEach((item,i)=>{
                arr.push(<span className="list list_li">{item}</span>)
            })
            return arr
        }
        
    }
    jumpcity(){
        let that=this
         $(".allcity").on("click",".list_li",function(){                        
                 var i=$(this).index()
                 let array=that.state.city_position
                 let n=array[i]-60
                 $("html").scrollTop(n)
                //  console.log($("html").scrollTop())
             })             
    }
    
    render() {
        return (
            <div className="allcity">
                <p>全部城市</p>               
                    <div className="allcity_head">
                        {this.pagination()}
                    </div>
                    <div className="allcity_body">
                         {this.wrapper()}
                    </div>
                    
                
            </div>           
        )
    }
  
}

AllCityComponent.defaultProps={
       
}

export default connect(state=>state)(AllCityComponent)


