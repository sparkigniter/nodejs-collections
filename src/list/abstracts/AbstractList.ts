import InvalidIndexException from "../exceptions/InvalidIndexException";
import OutofBoundException from "../exceptions/OutofBoundException";
import IList from "../interfaces/IList";

class AbstractList<Type> implements IList<Type> {

    list:Array<Type> = [];
    size:number = 0;
    maxLength?:number;

    constructor(maxLength?:number) {
        this.maxLength = maxLength;
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
                throw new InvalidIndexException("Index is not numeric");
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

    get(): Array<Type> {
        return this.list;
    }

}

export default AbstractList;