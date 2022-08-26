let upLocalData = {
	//设置的方法
	    set:(name,value) =>{
	        localStorage.setItem(name,JSON.stringify(value))
	    },
	//获取的方法
	    get : (name) =>{
	        return JSON.parse( localStorage.getItem(name))
	    },
	//删除的方法
	    removes:(name) =>{
	        localStorage.removeItem(name)
	    }
}
export default upLocalData