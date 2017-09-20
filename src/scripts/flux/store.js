const EventEmitter = require("events").EventEmitter
const store = Object.assign({},EventEmitter.prototype,{
    glass_info:[

    ],
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
    }
})
export default store