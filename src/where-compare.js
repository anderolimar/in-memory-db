const Operators = require("./operators");

class WhereCompare {
    constructor(ref, where) {
        this.ref = ref;
        this.where = where
    }
    
    compare() {
        for(let key of Object.keys(this.where)) {
            let whereProp = this.where[key];
            let refValue = this.getValue(key, this.ref);
            for(let k of Object.keys(whereProp)) {
                let positive = Operators[k](refValue, whereProp[k]);
                if(!positive) return false;
            }
        }
        return true;
    }
    
    getValue(key, obj) {
        const splitKeys = key.split('.')
        return splitKeys.reduce((res,val) => res[val], obj)
    }
}

module.exports = WhereCompare;
