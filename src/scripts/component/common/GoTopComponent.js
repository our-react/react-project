
class gotopComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state={
            scrolltop:false
        }
    }

    goTop(){
        $("#app,body,html").scrollTop(0);
       
    }
    componentDidMount(){
          window.addEventListener('scroll', this.orderScroll.bind(this));
       
    }
  

    orderScroll() {
        
        if($("body").scrollTop()>40){
            this.setState({
                scrolltop:true
            })
        }else{
            
            this.setState({
                scrolltop:false
            })
        }
    }
    
    render(){      
        return (
            <div className={this.state.scrolltop?"goback":"hidden"} onClick={this.goTop.bind(this)}>
                <span className="iconfont icon-huidaodingbu">
                </span>
            </div>    
        )
    }
}
//定义默认属性
gotopComponent.defaultProps={

}

export default gotopComponent