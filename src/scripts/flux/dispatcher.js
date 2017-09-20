import store from './store'
const Dispatcher = require('flux').Dispatcher
const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
    switch(action.type) {
        case 'ADD-DATA':
        store.addIndexData(action.data)
        break;
        default: break;
    }
})
export default dispatcher