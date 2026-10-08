function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
            return;
        }

        const words = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());

        resolve(words);
    });
}

const mixedArray = ['PIZZA', 10, true, 'HELLO', 'WORLD'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));