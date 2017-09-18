
import HeaderComponent from './HeaderComponent'
import ContentComponent from './ContentComponent'

class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          isFormShow:false
        }
    }
    ToggleForm(){
        this.setState({
            isFormShow:!this.state.isFormShow
        })
    }
    render(){
        let {isFormShow} = this.state
        return (
            <div>
               <HeaderComponent ToggleForm={this.ToggleForm.bind(this)}/>
               <ContentComponent isFormShow={isFormShow}/>
            </div>
        )
    }
}
//定义默认属性
RootComponent.defaultProps={

}



export default RootComponent