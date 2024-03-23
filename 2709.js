// To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe :(value)=>{
            if(val === value){
                return true
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe:(value) => {
            if(val !== value) {
                return true
            } else {
                throw new Error("Equal")
            }
        }
    }
};

console.log(expect(func = () => expect(5).toBe(5)));