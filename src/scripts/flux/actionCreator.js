
//actioncreator里有很多的方法，这些方法供view来调用的

//可以写一些异步操作，例如，view点击按钮后触发actions里面的某一个方法来动态来获取数据，然后再去更改store

import dispatcher from './dispatcher'
const actioncreator = {
    addNew(data){
    	let action = {
            data:data,
            type:'ADD_NEW'
       }
        dispatcher.dispatch(action)
    }
}

export default actioncreator