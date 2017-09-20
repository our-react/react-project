
//console.log(localStorage.todos.length)
const EventEmitter = require("events").EventEmitter
const store = Object.assign({},EventEmitter.prototype,{
 
    indexdata:'',
    getAll(){
        return this.indexdata
    },
    addNew(data){
    	this.indexdata=data
        this.emit("data-change")
        
    },
    addChangeListener(callback){
    	
        this.on("data-change",callback)
    }
})


export default store