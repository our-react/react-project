


const EventEmitter = require('events').EventEmitter

const store = Object.assign({},EventEmitter.prototype, {
    index_Data:{},
     glass_info:[

    ],
    getIndexData() {
        return this.index_Data        
    },
    addIndexData(data) {     
        this.index_Data = data
        this.emit("data-change")
    },
     getGlassInfo(){
        return this.glass_info
    },
    addNew(obj){
        this.glass_info=obj
        // console.log(obj,this.glass_info,'store')
        this.emit("glassInfo-change")
      },
    addChangeListener(callback){
    
    this.on("glassInfo-change",callback)
    },
    addChangeListener(cb){
        this.on('data-change', cb)
       
    }

})



export default store