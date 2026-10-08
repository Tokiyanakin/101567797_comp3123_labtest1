function resolvedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delayed Success!");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Delayed Exception!");
        }, 500);
    });
}

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));