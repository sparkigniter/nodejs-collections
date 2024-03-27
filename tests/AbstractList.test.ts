import AbstractList from "../src/list/abstracts/AbstractList";
import InvalidIndexException from "../src/list/exceptions/InvalidIndexException";
import OutofBoundException from "../src/list/exceptions/OutofBoundException";
import UnsupportedOperationException from "../src/list/exceptions/UnsupportedOperationException";

test('Add:Add value to list', () => {
    let list:AbstractList<number> = new AbstractList<number>();
    list.add(1);
    list.add(2);
    expect(list.get()).toStrictEqual([1,2]);
});

test('Add:Initialized array with specific size', () => {
    let list:AbstractList<number> = new AbstractList<number>(5, 0);
    expect(list.getSize()).toBe(5);
});

test('Add:Add value at specific index within boundary', () => {
    let list = new AbstractList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4, 1);
    expect(list.get()).toStrictEqual([1,4,2,3]);
});

test('Add:Add value at specific index outside boundary', () => {
    let list = new AbstractList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4, 6);
    expect(list.get()).toStrictEqual([1,2,3,4]);
});

test('Add:Invalid index exeption : not numeric index', () => {
    let list = new AbstractList<number>();
    expect(() => list.add(3,4.7)).toThrow(InvalidIndexException);
});

test('Add:Out of bound exception', () => {
    let list = new AbstractList<number>(3);
    list.add(1);
    list.add(2);
    list.add(3);
    expect(() => list.add(4)).toThrow(OutofBoundException);
});

test('Addall: Add Collection with zero length to another', () => {
    let list = new AbstractList<number>();
    let list1 = new AbstractList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    expect(() => list.addAll(list1)).toThrow(UnsupportedOperationException);
});

test('Addall: Add one collection to other', () => {
    let list:AbstractList<number> = new AbstractList<number>();
    let list1:AbstractList<number> = new AbstractList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list1.add(4);
    list1.add(5);
    list.addAll(list1);
    expect(list.get()).toStrictEqual([1,2,3,4,5]);
});

test("Remove: Remove one element", () => {
    let list:AbstractList<number> = new AbstractList<number>()
    list.add(1)
    list.add(2)
    list.add(3)
    list.add(4)
    list.remove(1)
    expect(list.get()).toStrictEqual([1,3,4]);
})
