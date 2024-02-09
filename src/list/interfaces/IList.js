import ICollection from "../../base/interfaces/ICollection";

class IList extends ICollection {

    constructor() {
        super();
    }

    add(value){
        this._WARNING('add');
    }

    addAll(collection) {
        this._WARNING('addAll');
    }
    
    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }   
}

export default IList;