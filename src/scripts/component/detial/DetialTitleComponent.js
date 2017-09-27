



class DetialTitleComponent extends React.Component {

    getdata() {
        let data = this.props.data
        if(data.length!=0){
            let arr = []  
            let arr1 = []  
            arr.push(
                 <div className="detial-tit">
                    <div className="title-left">{data.info.goodsName}</div>
                    <div className="title-right">
                        <span className="iconfont icon-fenxiang"></span>
                        <p>分享</p>
                    </div>
                </div> 
            )
            arr1.push(
                <div className="detial-price">
                    <div className="price-left">&yen; {data.info.shopPrice}</div>
                    <div className="price-center">快递 ：免运费</div>
                    <div className="price-right">{data.info.salesNum}人已买</div>
                </div>
            ) 
            
            arr = arr.concat(arr1)
            return arr
        }
    }
    getdecri() {
        let data = this.props.data
        if(data.length!=0){
            let arr = []  
            data.info.promiseTag.map((item, i)=>{     
                arr.push(
                    <li><span className="iconfont icon-zhengque"></span>{item}</li>
                )                     
                                                       
             })
            return arr
        }
    }
    getColor() {
        let data = this.props.data
        if(data.length!=0){
            // console.log(data.models)
            let arr = []  
            data.models.map((item, i)=>{     
                arr.push(
                    <li>{item.color}</li>
                )                     
                                                       
             })
            return arr
        }
    }


    render() {
        return (
            <div className="detial-title">
                { this.getdata()}
                <ul className="detial-decri">
                     {this.getdecri()}
                </ul>
                <div className="detial-color">
                    <p>颜色选择</p>
                    <ul>
                        {
                            this.getColor()
                        }
                        {/* <li>冰晶思考思考对方技</li>
                        <li>冰晶思考思考对方技</li>
                        <li>冰晶思考思考对方技</li>
                        <li>冰晶思考思考对方技</li>
                        <li>冰晶思考思考对方技</li>
                        <li>冰晶思考思考对方技</li>                         */}
                    </ul>
                </div>
            </div>
            
        )
    }

    
}
DetialTitleComponent.defaultProps={
      
    
    
}

export default DetialTitleComponent