import InvalidIndexException from "../exceptions/InvalidIndexException";
import OutofBoundException from "../exceptions/OutofBoundException";
import UnsupportedOperationException from "../exceptions/UnsupportedOperationException";
import IList from "../interfaces/IList";

class AbstractList<Type> implements IList<Type> {

    private list:Array<Type>;
    private size:number = 0;
    private maxLength?:number;

    constructor(maxLength?:number, fill?:Type) {
        this.maxLength = maxLength;
        (maxLength && Number.isInteger(maxLength)) ?  this.list = new Array(maxLength) : this.list = new Array();
        if(fill){
            this.list.fill(fill);
        }
    }

    add(value:Type, index?:number): Boolean{
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
                throw new InvalidIndexException("Invalid index");
            }
        } catch(e) { 
            if (e instanceof InvalidIndexException || e instanceof OutofBoundException){
                throw e;
            } else {
                return false;
            }
        }
        return true;
    }

    addAll(collection: AbstractList<Type>): Boolean {
       if(collection.getSize() <= 0) {
        throw new UnsupportedOperationException("Unsupported");
       }
       this.list = this.list.concat(collection.list);
       return true; 
    
    }

    remove(index?:number): Boolean {
        if(index) {
            this.list.splice(index, 1);
            return true
        }
        this.list.pop()
        return true
    }

    get(): Array<Type> {
        return this.list;
    }

    getSize(): number {
        return this.list.length;
    }

}

export default AbstractList;