const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8080/hell.html?id=100&status=active"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

//Host name (ignore port on URL)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//Serialized query(things after pathname)
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
