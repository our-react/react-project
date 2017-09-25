const reducer = (state = {
	user_info: {},
	user_info_i: {},
	city_info:{},
	now_city:''
}, action) => {
	let _state
	switch (action.type) {
		case 'USER_INFO':
			_state={}
			_state.user_info = action.value;
			return _state;
			break;
		case 'USER_INFO_I':
			_state={}
			_state.user_info_i = action.value;
			return _state;
			break;
		case 'CITY_INFO':
			_state={}
			_state.city_info= action.value;
			return _state;
			break;	
		case 'CHANGE_POSITION_INFO':
			_state={}
			_state.now_city= action.value;
			// console.log(_state.now_city,"reducer")
			return _state;
			break;	
		default:
			return state;
			break;
	}
}

export default reducer