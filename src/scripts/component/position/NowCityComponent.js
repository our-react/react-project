
import position  from "../../module/position"
import actions from "../../redux/actions"
import {connect} from 'react-redux'
class NowCityComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            now_position:'',
            isGet:''
        }
    }
    componentWillMount(){
        if(localStorage.position){
            this.setState({
                    now_position:localStorage.position,
                })
        }   
     }
   
     componentDidUpdate(){
        //  console.log(this.props.now_city,89) 
        if(this.props.now_city){
             if(this.state.now_position!=this.props.now_city){
                this.setState({
                  now_position:this.props.now_city
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
                <span className="iconfont icon-arrow-right"></span>             
            </div>           
        )
    }
}

NowCityComponent.defaultProps={
      
}

export default connect(state=>state)(NowCityComponent)
