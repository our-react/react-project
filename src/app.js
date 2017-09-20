
require("./styles/app.scss")

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import IndexComponent from './scripts/component/index/IndexComponent'

ReactDOM.render(<IndexComponent/>,document.getElementById("app"))