

class DetialStoreComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state={
            data:[]
        }
    }

    componentWillMount() {
        let that = this
        fetch("http://localhost:9000/loho/store/302").then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                data: json.result
            })
        })
    }
    getStore() {
        if(this.state.data.length!=0) {
            console.log(this.state.data)
        }
    }
 
    render() {
        return (
            <div className="detial-shop">
                <h4>APM购物中心店</h4>
                <p><span className="iconfont "></span>&nbsp;&nbsp;&nbsp;<span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span></span></p>
                <p>地址： 北京市电路的辅导费地方见识到了废旧塑料放松了</p>
            </div>
            
        )
    }

    
}
DetialStoreComponent.defaultProps={
        
    
    
}

export default DetialStoreComponent