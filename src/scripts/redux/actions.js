
import position  from "../module/position"
import store from './store'
const actions = {
	user_n(obj){
		let action = {
			type:'USER_INFO',
			value:obj
		}
		store.dispatch(action)
	},
	user_i(obj){
		let action = {
			type:'USER_INFO_I',
			value:obj
		}
		store.dispatch(action)
	},
	city_info(obj){
		store.dispatch({
			type:"CITY_INFO",
			value:obj
		})
	},
	getPosition(info){	
	//    console.log("getting...")		
              store.dispatch({
           		type:'CHANGE_POSITION_INFO',
           	    value:info
			  })
	},
	
}

export default actions