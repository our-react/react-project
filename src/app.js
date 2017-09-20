
require("./styles/app.scss")


import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import IndexComponent from './scripts/component/index/IndexComponent'



ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={IndexComponent}>           
            <IndexRoute component={IndexComponent}/>          

        </Route>
    </Router>
    
    ,document.getElementById("app"))


ReactDOM.render(<IndexComponent/>,document.getElementById("app"))
