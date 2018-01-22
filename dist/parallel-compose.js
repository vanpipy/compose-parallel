// 2018-01-22 17:52:20 


/*
 * compose(a, b, c) call order by c -> b -> a
 */
function compose () {
    const funsStack = Array.prototype.slice.call(arguments);

    if (funsStack.length > 2) {
        funsStack.unshift(_compose(funsStack.shift(), funsStack.shift()));
        return compose.apply(this, funsStack);
    } else {
        return _compose.apply(this, funsStack);
    }
}

function _compose (f, g) {
    return function (x) {
        return f(g(x));
    }
}

if (module && module.exports) {
    module.exports = compose;
}

function curry (Fn) {
    return rebuild(Fn, [], Fn.length);
}

function rebuild (originalFn, validParams, validParamsLength) {
    return function () {
        const params = Array.prototype.slice.call(arguments);

        if (validParamsLength - params.length > 0) {
            return rebuild(originalFn, validParams.concat(params), validParamsLength - params.length);
        } else {
            return originalFn.apply(this, validParams.concat(params));
        }
    };
}

if (module && module.exports) {
    module.exports = curry;
}

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

if (module && module.exports) {
    module.exports = map;
}
