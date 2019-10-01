//function declaration
function sum(x, y) {
    return x + y
}

console.log(sum(3, 44));

const zum = function (c, d) {
    return c * d;
}
console.log(zum(6, 8));

const fun = (x, y) => x + y;
console.log(fun(4, 6));


//function expression
const getOperation = (operator) => {
    switch (operator) {
        case '+':
            return (x, y) => x + y;

        case '-':
            return (x, y) => x - y;

        case '*':
            return (x, y) => x * y;

        default :
            return null;
    }
}


const sumOperation = getOperation('+');
console.log(sumOperation(5, 6));

function writeName(name) {
    console.log(`I am ${name}`);
}

writeName('Ivan');

(function count(num) {
    for (let i = 1; i <= num; i++) {
        console.log("*".repeat(i));
    }
    for (let i = num - 1; i > 0; i--) {
        console.log("*".repeat(i));
    }
})(3)


//function fat arrow expression
const f = function () {
    let x = 0;
    return () => {
        console.log(x);
        x++;
    }
}();

f();
f();
f();


//function generator
function* getIdGenerator() {
    let id = 0;
    while (true) {
        id++;
        yield id;
    }
}

const idGenerator = getIdGenerator();

for (id of idGenerator) {

    console.log(id);

    if (id > 10) {
        break;
    }

}

const func = function () {
    let x = 0;
    return () => {
        console.log(x);
        x++;
    }
}();

func();
func();
func();