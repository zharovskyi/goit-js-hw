
// Write function createPromiseRandom(min, max, delay), which returns promise, which:
// change state into fulfilled, if min is less than max and generates random number
// after delay milliseconds in range from min to max;
// change state into rejected, if min is greater than max and returns error object.
// To generate random numbers, you can use Math.random().
// Examples of using function:

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function createPromiseRandom(min, max, delay) {
    return new Promise((resolve, reject) => {

        // Your code
        setTimeout(() => {
            if(max > min){
                resolve(randomIntegerFromInterval(min, max));
            }
            else{
                reject({message: 'Error, min > max'});
            }
            
        }, delay)

    });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then((data) => console.log(data));
let p2 = createPromiseRandom(1000, 100, 3000);
p2.catch( (err) => console.error(err.message) );

// After two seconds, random number from 1 to 100 should display on screen.
// After three seconds, error message should display on screen.