const Operators = require("./operators");

class WhereCompare {
    constructor(ref, where) {
        this.ref = ref;
        this.where = where
    }
    
    compare() {
        const orProp = this.where['$or'];
        for(let key of Object.keys(this.where)) {
            let whereProp = this.where[key];
            let refValue = this.getValue(key, this.ref);
            console.log(whereProp)
            console.log(refValue)
            for(let k of Object.keys(whereProp)) {
                let positive = Operators[k](refValue, whereProp[k]);
                if(!positive && !orProp) return false;
                if(positive && orProp) return true;
            }
        }
        return orProp ? false : true;
    }
    
    getValue(key, obj) {
        const splitKeys = key.split('.')
        return splitKeys.reduce((res,val) => res[val], obj)
    }
}

module.exports = WhereCompare;
