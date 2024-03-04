import ICollection from "../../base/interfaces/ICollection";

interface IList<Type> extends ICollection<Type> {

    add(value: Type, index?: number): Boolean;

    addAll(collection: Type): Boolean;
}

export default IList;