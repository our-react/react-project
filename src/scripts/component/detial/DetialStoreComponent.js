import {Link} from 'react-router'

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
            // console.log(json)
            this.setState({
                data: json.result
            })
        })
    }
    getStore() {
        if(this.state.data.length!=0) {
            // console.log(this.state.data)
        }
    }
 
    render() {
        return (
            <div className="detial-store">
                <div className="show-store">
                    <h4>APM购物中心店</h4>
                    <p><span className="iconfont icon-iconfont-map-marker"></span>&nbsp;&nbsp;&nbsp;<span>1.06km</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>免费预约直营店验光</span></p>
                    <p><span>地址： 北京市东城区王府井大街138号（新东安广场） 3楼L321</span><span className="iconfont icon-phone01"></span></p>
                </div>
                <div className="bj-store">
                    <Link to="">
                        <span>查看北京17家门店（全国<span>233</span>家）</span>
                        <span className="iconfont icon-arrow-right"></span>
                    </Link>
                </div>
            </div>
            
        )
    }

    
}
DetialStoreComponent.defaultProps={
        
    
    
}

export default DetialStoreComponent