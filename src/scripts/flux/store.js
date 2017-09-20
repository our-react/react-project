
const EventEmitter = require('events').EventEmitter

const store = Object.assign({},EventEmitter.prototype, {
    index_Data:{},
    getIndexData() {
        return this.index_Data        
    },
    addIndexData(data) {     
        this.index_Data = data
        this.emit("data-change")
    },
    addChangeListener(cb){
        this.on('data-change', cb)
       
    }

})

export default store