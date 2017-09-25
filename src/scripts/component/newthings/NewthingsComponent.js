import {Link} from 'react-router'
import HeaderComponent from '../common//HeaderComponent'

import CompreComponent from './CompreComponent'
import Fetch from '../../module/fetch'

class NewthingsComponent extends React.Component {
	constructor(props,context) {
        super(props,context)
        this.state={
        	
        }
    }
	changeUrl(num){
//		switch(num){
//			case 1:actions.changeUrl("http://localhost:9000/loho/search/?e=222&page=1","http://localhost:9000/loho/search/?e=222&page=2");break;
//			case 2:actions.changeUrl("http://localhost:9000/loho/search/?e=222&page=1&sort=o1","http://localhost:9000/loho/search/?e=222&page=2&sort=o1");break;	
//			case 3:actions.changeUrl("http://localhost:9000/loho/search/?e=222&page=1&sort=o5","http://localhost:9000/loho/search/?e=222&page=2&sort=o5");break;			
//		}
		
	}
    render() {
        return (          
            <div className="newthings">
                <HeaderComponent data = {this.props}/>
                
                <div className="goodsList">
					<div className="production-filter-bar">
						<div className="listnav">
							<a>综合</a>
							<a>销量</a>
							<a>价格</a>
							<a>筛选</a>						
						</div>
						<CompreComponent/>
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