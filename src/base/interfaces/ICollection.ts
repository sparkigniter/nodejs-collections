interface ICollection<Type> {
     
    add(value: Type): Boolean;

    addAll(ICollection: ICollection<Type>): Boolean;
}

export default ICollection;
