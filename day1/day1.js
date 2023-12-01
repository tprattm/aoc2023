var fs = require('fs');

var input = fs.readFileSync("./input.csv", "utf-8").split("\n");

//console.log(input[0]);
//console.log(array);

var output = [];

for (var i in input) {
    const regex = /\d+/;
    var checking = input[i];
    let result = checking.replace(/[^0-9]/g,"");
    output.push(result);
    i++;
};

var final = 0;

for (var i in output) {
    let string = output[i];
    let firstChar = string[0];
    let lastChar = string[string.length - 1];
    let result = firstChar.concat(lastChar);
    final = final + Number(result);
}

console.log(final);
