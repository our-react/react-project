import FooterComponent from "./index/FooterComponent"

import GuessComponent from "./index/GuessComponent"

import FootadComponent from "./index/FootadComponent"

import GoTopComponent from "./index/GoTopComponent"
class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
         
        }
    }
   
    render(){
       
        return (
            <div>
                <GuessComponent/>
                <FooterComponent/>
                <FootadComponent/>
                <GoTopComponent/>
            </div>
        )
    }
}
//定义默认属性
RootComponent.defaultProps={

}



export default RootComponent