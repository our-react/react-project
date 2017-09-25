

import HeaderComponent from "../common/HeaderComponent"
import DetialLunBoComponent from "./DetialLunBoComponent"
import DetialTitleComponent from "./DetialTitleComponent"
import DetialStoreComponent from "./DetialStoreComponent"



class DetialComponent extends React.Component {
      constructor(props,context) {
        super(props,context)
        this.state={
            data:[],
           
        }
    }

   componentWillMount() {
       let that = this
        fetch("http://localhost:9000/loho/goods/5645").then(res=>{
            return res.json()
        }).then(json=>{ 
            that.setState({
                data:json.result
            })   
        })
     
    }
    render() {
        return (
            <div className="detial-page">
                <HeaderComponent data = {this.props}/>
                <DetialLunBoComponent lunbo={this.state.data} />  
                <DetialTitleComponent  data={this.state.data}/>
                <DetialStoreComponent />
            </div>
            
        )
    }

    
}
DetialComponent.defaultProps={
        position: "",
        fanhui: "icon-iconback",
        title: "",
        gouwu: "icon-gouwuche",
        login: "icon-gengduo"
    
    
}

export default DetialComponent