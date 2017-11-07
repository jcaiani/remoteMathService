"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.promisify = promisify;
exports.remoteMathService = remoteMathService;
exports.callOneService = callOneService;
exports.callTwoService = callTwoService;
/*
 * Joseph Caiani
 * Debugging/Testing Problem for Red Hat
 */

function promisify(fn) {
    return new Promise(function (resolve, reject) {
        fn(function (err, num) {
            if (err) {
                return reject(err);
            }
            return resolve(num);
        });
    });
}
function remoteMathService(cb) {
    var one, two;
    one = promisify(callOneService);

    two = promisify(callTwoService);

    Promise.all([one, two]).then(function (results) {
        cb(null, results[0] + results[1]);
    }).catch(function (results) {
        cb(results, 0);
    });
}
function callOneService(cb) {
    setTimeout(function () {
        return cb(undefined, 1);
    }, 1000);
}
function callTwoService(cb) {
    setTimeout(function () {
        return cb(undefined, 2);
    }, 1500);
}
remoteMathService(function (err, answer) {
    if (err) console.log("error ", err);
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
});