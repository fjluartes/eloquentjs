// JSON
// JSON.stringify: convert object to JSON formatted string
// JSON.parse: convert JSON string to object
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
console.log(JSON.parse(string).events);

// Notes
// Objects and Arrays: contains addresses of contents
// JSON: serialization of data so that it can be stored ore sent
let jsonStr = '{'
    + '"squirrel": false,'
    + '"events": ["work", "touched tree", "pizza", "running"]'
    + '}';
let jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);
console.log(JSON.stringify(jsonObj));
