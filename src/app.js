
require("./styles/app.scss")

import RootComponent from './scripts/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'


import IndexComponent from './scripts/component/index/IndexComponent'
import RegisterComponent from './scripts/component/register/RegisterComponent'
import LoginComponent from './scripts/component/login/LoginComponent'
import NewthingsComponent from './scripts/component/newthings/NewthingsComponent'
import SocketComponent from './scripts/component/socket/SocketComponent'
import NearbyComponent from './scripts/component/nearby/NearbyComponent'



ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>           
            <IndexRoute component={IndexComponent}/>  
            <Route path="/index" component={IndexComponent}></Route>
            <Route path="/register" component={RegisterComponent}></Route>  
            <Route path="/login" component={LoginComponent}></Route>  
            <Route path="/newthings" component={NewthingsComponent}></Route>  
            <Route path="/socket" component={SocketComponent}></Route> 
            <Route path="/nearby" component={NearbyComponent}></Route>          
        </Route>
    </Router>
    
,document.getElementById("app"))

