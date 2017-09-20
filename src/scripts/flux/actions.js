import dispatcher from './dispatcher'
const actioncreator = {
    addNew(obj){
        let action={
            glassInfo:obj,
            type:'ADD_NEW'
        }
        // console.log(obj,"action")
        dispatcher.dispatch(action)
    }
}
export default actioncreator