

import HeaderComponent from "../common/HeaderComponent"
import DetialLunBoComponent from "./DetialLunBoComponent"
import DetialTitleComponent from "./DetialTitleComponent"
import DetialStoreComponent from "./DetialStoreComponent"
import DetialGoodsComponent  from './DetialGoodsComponent'
import DetialFooterComponent from './DetialFooterComponent'
import GoTopComponent from '../common/GoTopComponent'



class DetialComponent extends React.Component {
      constructor(props,context) {
        super(props,context)
      // console.log(this.props.params.id)
        this.state={
            data:[],
            peddle:[]
           
        }
    }

   componentWillMount() {
       let that = this
        fetch("http://localhost:9000/loho/goods/"+this.props.params.id).then(res=>{
            return res.json()
        }).then(json=>{ 
            that.setState({
                data:json.result
            })   
        })
        fetch("http://localhost:9000/loho/goods/peddle/5808").then((res)=>{
            return res.json()
        }).then(json=>{
            that.setState({
                peddle: json.result
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
                <DetialGoodsComponent goods={this.state.data} peddle={this.state.peddle}/>
                <DetialFooterComponent />
                <GoTopComponent />
            </div>
            
        )
    }

    
}
DetialComponent.defaultProps={
        title: ""      
}

export default DetialComponent