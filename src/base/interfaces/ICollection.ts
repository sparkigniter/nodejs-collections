interface ICollection<Type> {
     
    add(value: Type): Boolean;

    // addAll(ICollection: Type): Boolean;
}

export default ICollection;