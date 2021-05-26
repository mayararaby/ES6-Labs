function* fibonacci(n) {
    const infinite = !n && n !== 0;
    let current = 0;
    let next = 1;

    while (infinite || n--) {
        yield current;
        [current, next] = [next, current + next];
    }
}

function* fibonacci(n, current = 0, next = 1) {
    if (n === 0) {
        return current;
    }
    yield current;
    yield* fibonacci(n - 1, next, current + next);
}

let a = [...fibonacci(20)]

let [...first10] = fibonacci(10);
console.log(first10);