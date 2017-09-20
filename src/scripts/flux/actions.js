
import dispatcher from './dispatcher'
const actions = {

    addIndexData(data) {
        let action = {
            data: data,
            type: 'ADD-DATA'
        }
        dispatcher.dispatch(action)
    }
}
export default actions