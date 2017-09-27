import {Link} from 'react-router'
import HeaderComponent from '../common//HeaderComponent'

import CompreComponent from './CompreComponent'
import Fetch from '../../module/fetch'

class NewthingsComponent extends React.Component {
	constructor(props,context) {
        super(props,context)
        this.state={
        	index:0,
        	url1:"http://localhost:9000/loho/search/?e=222&page=1",
        	url2:'http://localhost:9000/loho/search/?e=222&page=2'
        }
    }
	changeStyle(index,sort){
		//console.log(e)
		let that=this;
		that.setState({
			index:index,
			url1:"http://localhost:9000/loho/search/?e=222&page=1"+sort,
			url2:'http://localhost:9000/loho/search/?e=222&page=2'+sort
		})
		
	}
	
    render() {
        return (          
            <div className="newthings">
                <HeaderComponent data = {this.props}/>               
                <div className="goodsList">
					<div className="production-filter-bar">
						<div className="listnav">
							<li className={this.state.index==0?"active":''} onClick={this.changeStyle.bind(this,0,'')}>综合</li>
							<li className={this.state.index==1?"active":''} onClick={this.changeStyle.bind(this,1,"&sort=o1")}>销量</li>
							<li className={this.state.index==2?"active":''} onClick={this.changeStyle.bind(this,2,"&sort=o5")}>价格</li>
							<li className={this.state.index==3?"active":''} onClick={this.changeStyle.bind(this,3)}>筛选</li>						
						</div>
						{this.state.index==0?<CompreComponent data={this.state}/>:''}
						{this.state.index==1?<CompreComponent data={this.state}/>:''}
						{this.state.index==2?<CompreComponent data={this.state}/>:''}
						{this.state.index==3?<ChooseComponent/>:''}
					</div>					
				</div>
             </div> 
             
           
        )
    }
}
NewthingsComponent.defaultProps={
        position: "",
        fanhui: "icon-iconback",
        title: "新品上市",
        gouwu: "icon-gouwuche",
        login: "icon-gengduo"   
}
export default NewthingsComponent