import AbstractList from "../abstracts/AbstractList";
import IList from "../interfaces/IList";

class ArrayList<Type> extends AbstractList<Type> {

    add(value: Type, index: number): Boolean {
        return true;
    }
}