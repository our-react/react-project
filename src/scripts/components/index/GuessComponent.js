
import Fetch from "../../modules/fetch"
import store from '../../flux/store'
import actions from '../../flux/actions'

class GuessComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state={
            isShow:true,
            glass_info:[],
            count:1
        }
    }
    getGlasses(){
        let that=this;            
        Fetch.Get("http://localhost:9000/loho/search/",{
            sort:'o6',
            e:249,
            page:this.state.count
        }).then((res)=>{
            return res.json()
        }).then((json)=>{
            let brr=that.state.glass_info;
            let crr=json.result.data;          
                 for(var i in crr){
                    brr.push(crr[i])
                }       
                // console.log(brr);
                that.setState({
                    glass_info:brr
                })   
                actions.addNew(that.state.glass_info)             
        })
    }
     showGlass(){
        let arr=[];
        if(this.state.glass_info.length!=0){           
         this.state.glass_info.forEach((item,i)=>{   
            let url="http://image.loho88.com/"+item.img
             arr.push(<li className="guess_list--li">
                        <h1><img src={url} alt=""/></h1>
                        <p className="info">{item.title}</p>
                        <p className="price"><span className>￥{item.price}</span></p>
                   </li>)
         })
        }
        return arr
     }

    hideGlass(){            
        this.setState({
             isShow:!this.state.isShow
        })       
    }
    changeGlass(){
        if(this.state.count<5){
        this.setState({
            count:++this.state.count
        })        
        this.getGlasses()
        }
    }
    componentDidMount(){       
        this.getGlasses()
       
    }
    // componentWillReceiveProps(props,context){
        
    //     this.getGlasses()
    // }
 
    addMore(){
        let hrr=[];
         if(this.state.count<5){
            hrr.push(<span classsName="addmore_first" onClick={this.changeGlass.bind(this)}>点击加载更多</span>)
        }else{
            hrr.push(<span addmore_first>已经到底部了</span>)
       }
        return hrr
    }

    render(){
        
        return (
            <div className="guess">
                <p className="guess_head" onClick={this.hideGlass.bind(this)}>你可能喜欢  <span className="iconfont icon-fanhui-copy"></span></p>             
                <ul className={this.state.isShow?"guess_list":"guess_list hidden"}>          
                      {this.showGlass()} 
                </ul>
                <div className={this.state.isShow?"addmore":"addmore hidden"}>
                   {this.addMore()}
                </div>

            </div>
        )
    }

//定义默认属性
}
GuessComponent.defaultProps={

}

export default GuessComponent