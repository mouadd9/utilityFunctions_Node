// let's create an object that will hold utility functions 


const util = {
    add: (a, b) =>{
        return a + b;
    },

    subtract: (a, b) => {
        return a - b;
    },

    multiply: (a, b) => {
        return a*b;
    }

}

// here we export this object 
module.exports = util;