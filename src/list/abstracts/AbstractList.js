import InvalidIndexException from "../exceptions/InvalidIndexException";
import OutofBoundException from "../exceptions/OutofBoundException";
import IList from "../interfaces/IList";

class AbstractList extends IList {

    list = [];
    size = 0;
    maxLength = null;

    constructor(maxLength = null) {
        super();
        this.maxLength = maxLength;
    }

    add(value, index = null){
        try{
            if(this.size == this.maxLength){
                throw new OutofBoundException("Out of bound");
            }
            if (index == null ) {
                this.list.push(value);
                this.size++;
            } else if(Number.isInteger(index)) {
                this.list.splice(index, 0, value);
                this.size++;
            } else {
                throw new InvalidIndexException("Index is not numeric");
            }
        } catch(e) { 
            if (e instanceof InvalidIndexException || e instanceof OutofBoundException){
                throw e;
            } else {
                return false;
            }
        }
    }

    get() {
        return this.list;
    }

    addAll(collection) {
        this._WARNING('addAll');
    }
    
    _WARNING(fName = 'unknown method') {
        console.warn('WARNING! Function "' + fName + '" is not overridden in ' + this.constructor.name);
    }   
}

export default AbstractList;