// 1-masala

// let arr = [4, 2, 9, 7, 5];
// let result = arr.sort(length);

// console.log(result);



///5-masala
function arrnum(array) {
    let result = [];

    for (let value of array) {
        if (!result.includes(value)) {
            result.push(value); 
        }
    }

    return result.length === 2;
}
let array1 = [1, 2, 1, 2, 1];
console.log(arrnum(array1));
