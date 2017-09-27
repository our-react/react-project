



import store from '../../flux/store'
import {Link} from 'react-router'


class ListComponent extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state={
            data: ''
        }
       
    }
  
   
    componentWillMount() {
        var that = this
        store.addChangeListener(()=>{
            that.setState({
                data: store.getIndexData()              
            })  
        }) 
    }

    showList() {     
        let arr = []
        var _arr = []
        let that = this
        if(this.state.data.classify) {
            this.state.data.classify.forEach((item, i)=>{
                arr.push( 
                    <div className="list">
                        <div className="list-top">
                            <h5>{item.title.word}</h5>
                            <a href={item.more.url}>{item.more.word}</a>
                        </div>
                        <div className="banner"><img src={item.img.pic} alt=""/></div>  
                    </div>                              
                )                     
                _arr.push(

                    <div className="product-list">
                        <div className="product-left">
                            <Link  to={"/detial/"+item.show.gid}>
                                <span>{item.show[0].tag}</span>
                                <span>{item.show[0].tag_en}</span>
                                <img src={item.show[0].pic} alt=""/>                      
                            </Link>
                        </div>  
                        <div className="product-right">
                            <Link to={"/detial/"+item.show.gid}>
                                <span>{item.show[1].tag}</span>
                                <span>{item.show[1].tag_en}</span>
                                <img src={item.show[1].pic} alt=""/>                      
                            </Link>
                            <Link to={"/detial/"+item.show.gid}>
                                <span>{item.show[2].tag}</span>
                                <span>{item.show[2].tag_en}</span>
                                <img src={item.show[2].pic} alt=""/>                      
                            </Link>
                        </div>  
                    </div>
                )  
              arr = arr.concat(_arr)  
              _arr=[]
                                         
            })
        }
       return arr
        
    }

  
    render() {
        return (           
            <div className="list-product">               
                {
                    this.state.data?this.showList():''
                }
               
            </div>               
        )
    }
}

export default ListComponent
