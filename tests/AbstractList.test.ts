import AbstractList from "../src/list/abstracts/AbstractList";
import InvalidIndexException from "../src/list/exceptions/InvalidIndexException";
import OutofBoundException from "../src/list/exceptions/OutofBoundException";

test('Add value to list', () => {
    let list:AbstractList<number> = new AbstractList<number>();
    list.add(1);
    list.add(2);
    expect(list.get()).toStrictEqual([1,2]);
});

test('Add value at specific index within boundary', () => {
    let list = new AbstractList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4, 1);
    expect(list.get()).toStrictEqual([1,4,2,3]);
});

test('Add value at specific index outside boundary', () => {
    let list = new AbstractList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4, 6);
    expect(list.get()).toStrictEqual([1,2,3,4]);
});

test('Invalid index exeption : not numeric index', () => {
    let list = new AbstractList<number>();
    expect(() => list.add(3,"text")).toThrow(InvalidIndexException);
});

test('Out of bound exception', () => {
    let list = new AbstractList<number>(3);
    list.add(1);
    list.add(2);
    list.add(3);
    expect(() => list.add(4)).toThrow(OutofBoundException);
});