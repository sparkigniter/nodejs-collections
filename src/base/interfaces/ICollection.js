class ICollection {
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

export default ICollection;