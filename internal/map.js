
function map (fn, functor) {
    let i = 0;
    let len = functor.length;
    let _array = Array(len);

    while (i < len) {
        _array[i] = fn(functor[i], i);

        i += 1;
    }

    return _array;
}
