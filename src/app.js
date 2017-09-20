
require("./styles/app.scss")


import IndexComponent from './scripts/component/index/index'


import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'



ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={IndexComponent}>           
            <IndexRoute component={IndexComponent}/>          

        </Route>
    </Router>
    
    ,document.getElementById("app"))