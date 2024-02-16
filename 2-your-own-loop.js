function loop(val, cond, upd, body) {
    // console.log(val);
    // n = val;
    // console.log(cond);
    // console.log(upd);
    // console.log(body);
    // if(!cond) {
    //     console.log("end" + n + val);
    //     return;
    // }
    // else {
    //     body(val);
    //     n--;
    // }
    // val = n;
    // return loop(val, cond, upd, body);

    // for(n = val; cond; upd) {
    for(n = val; n > 0; n = n - 1) {
        body(n);
    }
    return;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1