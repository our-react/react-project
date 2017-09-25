
import position  from "../../module/position"
import actions from "../../redux/actions"
import {connect} from 'react-redux'
class DetailComponent extends React.Component {
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
            <div>
              {this.props.routeParams.id}        
            </div>           
        )
    }
}

DetailComponent.defaultProps={
      
}

export default connect(state=>state)(DetailComponent)
