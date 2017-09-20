

class FootadComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
         
        }
    }
   
    render(){
        
        return (
            <div className="footad">
            
                   <ul className="footad_top">
                       <li>
                           <b className="iconfont icon-iconfont-map-marker"></b>
                           <span>欢迎到体验店试戴</span>
                       </li>
                        <li>       
                            <b className="iconfont icon-dianhua2"></b>
                            <div className="text-center">                      
                            <a href="tel:400-887-1920" className="footad_tel">预约热线：400-887-1920</a><br/>
                            <span className="serverTime">(服务时间 9:00-23:00)</span>
                            </div>                         
                       </li>
                   </ul>
                 <h1>
                     <img src="./images/index/logo.png"/>
                </h1>
                <div className="m_copyright"><p>©2005-2016 深圳市乐活电子商务有限公司版权所有，并保留所有权利。</p></div>
            </div>    
        )
    }
}
//定义默认属性
FootadComponent.defaultProps={

}

export default FootadComponent