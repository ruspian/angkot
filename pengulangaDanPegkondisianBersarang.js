// contoh 1
var string = '';

for( var i = 0; i < 10; i++) {
    for( var j = 0; j < 5; j++) {
        string += '*';
    }
    string += '\n';
}
console.log(string);

// contoh 2
var string = '';

for( var i = 0; i < 10; i++) {
    for( var j = 0; j <= i; j++) {
        string += '*';
    }
    string += '\n';
}
console.log(string);


// contoh 3
var string = '';

for( var i = 10; i > 0; i--) {
    for( var j = 0; j < i; j++) {
        string += '*';
    }
    string += '\n';
}
console.log(string);