

import dispatcher from './dispatcher'
const actions = {

    addIndexData(data) {
        let action = {
            data: data,
            type: 'ADD-DATA'
        }
        dispatcher.dispatch(action)
    },
    addNew(obj){
        let action={
            glassInfo:obj,
            type:'ADD_NEW'
        }
        // console.log(obj,"action")
        dispatcher.dispatch(action)
    }
}
export default actions

