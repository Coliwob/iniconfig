"use strict";
module.exports = class ToNumbers {
    
    static clean (obj){
        
        var iterate = (obj) => {
    
            Object.keys(obj).forEach(key => {
            
                if(this.isPrimitive(obj[key])){
                    obj[key] = (isNaN(Number(obj[key])) ? obj[key] : Number(obj[key]));
                }
                
                if (typeof obj[key] === 'object') {
                        iterate(obj[key]);
                    }
            });
        }
        iterate(obj);
    	return obj;
    }
    static isPrimitive(arg){
        var type = typeof arg;
        return arg == null || (type != "object" && type != "function");
    }
   
}

