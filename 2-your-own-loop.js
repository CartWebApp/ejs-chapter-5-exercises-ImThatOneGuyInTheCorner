function loop(val, cond, upd, body) {
    for (val; cond(val); val = upd(val)) {
        body(val);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1