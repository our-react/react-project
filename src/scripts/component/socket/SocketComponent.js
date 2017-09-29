import {Link} from 'react-router'
class SocketComponent extends React.Component {
	constructor(props,context) {
        super(props,context)
        this.state={        	
        	data:[]
        }
    }
	sendMessage(){
		let that=this;
		let txt=document.getElementById('text').value;
		//console.log(txt)
		let _data=that.state.data;
		_data.push({'content':txt})
		that.setState({
			data:_data
		})
	}
	componentWillMount(){
	
	}
	getData(){
		let data=this.state.data;
		let arr=[];
		console.log(data)
		data.forEach((item,i)=>{
			arr.push(<span className="txtBox">{item.content}</span>)
		})
		return arr;
	}
    render() {
        return (
            <div >
               <div className="socket-header">
               		<Link to="/index">
           			<span className="iconfont icon-iconback"></span>
           			<span className="back_content">返回</span>
               		</Link>
               		<span className='kefu'>loho眼镜生活:樱桃 </span>
               </div>
               <div className="allMessage">
               		{this.getData()}
               </div>
               <div className="socket-footer">
               		<span className="iconfont icon-tianjia"></span>
               		<input type="text" id='text'/>
               		<span className="text-send" onClick={this.sendMessage.bind(this)}>发送</span>
               </div>
             </div> 
           
        )
    }
}

export default SocketComponent