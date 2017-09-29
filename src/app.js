
require("./styles/app.scss")

import RootComponent from './scripts/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'


import IndexComponent from './scripts/component/index/IndexComponent'
import RegisterComponent from './scripts/component/register/RegisterComponent'
import LoginComponent from './scripts/component/login/LoginComponent'
import NewthingsComponent from './scripts/component/newthings/NewthingsComponent'
import SocketComponent from './scripts/component/socket/SocketComponent'
import NearbyComponent from './scripts/component/nearby/NearbyComponent'

import PositionComponent from './scripts/component/position/PositionComponent'
import DetialComponent from './scripts/component/detial/DetialComponent'
import RootLoginComponent from './scripts/component/login/RootLoginComponent'
import CartComponent from "./scripts/component/cart/CartComponent"

import LoginSetComponent from './scripts/component/login/LoginSetComponent'

import {Provider} from 'react-redux'
import store from './scripts/redux/store'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={RootComponent}>           
                <IndexRoute component={IndexComponent}/>  
                <Route path="/index" component={IndexComponent}></Route>
                <Route path="/register" component={RegisterComponent}></Route>  
                <Route path="/login" component={RootLoginComponent}></Route>  
                <Route path="/newthings" component={NewthingsComponent}></Route>   
                <Route path="/newthings/:id/:tag" component={NewthingsComponent}></Route>             
                <Route path="/socket" component={SocketComponent}></Route> 
                <Route path="/nearby/:id" component={NearbyComponent}></Route>
                <Route path="/position" component={PositionComponent}></Route>         
                <Route path="/detial/:id" component={DetialComponent}></Route>       
                <Route path="/nearby" component={NearbyComponent}></Route>   
                <Route path="/detial" component={DetialComponent}></Route>   
                <Route path="/exit" component={LoginSetComponent}></Route>   
                <Route path="/cart" component={CartComponent}></Route>   

            </Route>
        </Router>

    </Provider>
,document.getElementById("app"))

