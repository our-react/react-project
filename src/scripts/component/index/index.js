

import HeaderComponent from "./HeaderComponent"
import ListComponent from "./ListComponent"

import Fetch from '../../module/fetch'
import store from '../../flux/store'
import actions from '../../flux/actions'


class IndexComponent extends React.Component {

    constructor(props,context) {
        super(props,context)
        this.state={
            list:store.getIndexData()
        }
    }

    componentWillMount() {
       let that = this
        Fetch.Get("http://localhost:9000/list/index",{
        }).then(res=>{
           return res.json()
        }).then(json=>{          
            actions.addIndexData(json.result)                
        })
     
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                <ListComponent  />
            </div>
            
        )
    }

    
}

export default IndexComponent