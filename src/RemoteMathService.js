/*
 * Joseph Caiani
 * Debugging/Testing Problem for Red Hat
 */

export function promisify (fn) {
    return new Promise((resolve, reject) => {
        fn((err, num) => {
            if (err) {
                return reject(err);
            }
            return resolve(num);
        });
    })
}
export function remoteMathService (cb) {
    var one, two;
    one = promisify(callOneService);

    two = promisify(callTwoService);

    Promise.all([one, two])
        .then((results) => {
           cb(null, results[0] + results[1]);
        })
        .catch((results) => {
            cb(results, 0);
        });
}
export function callOneService (cb) {
    setTimeout ( function () {
        return cb( undefined, 1 );
    }, 1000 );
}
export function callTwoService (cb) {
    setTimeout ( function () {
        return cb( undefined, 2 );
    }, 1500 );
}
remoteMathService( function (err, answer) {
    if (err) console.log ( "error " , err);
    if (answer !== 3 ) {
        console.log ( "wrong answer" , answer);
    } else {
        console.log ( "correct" );
    }
});

