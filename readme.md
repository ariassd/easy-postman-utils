# mke-postman-utils (Make it easy postman utils)

You really want to use Postman like a pro!

Mke-postman-utils is a script that contains several functions that helps you to make automatization on your requests

# Installation

1- Make a new get request
2- Add the following script to your pre request script

```javascript
pm.sendRequest("https://github.com/ariassd/mke-postman-utils/v1.1/src/mke-postam-util.js", function (err, response) {
  postman.setEnvironmentVariable("gamanza", response);
});

// Important, never store in postman production username and password.
pm.variables.set("url", "<your service url>");
pm.variables.set("auth.username", "<username>");
pm.variables.set("auth.password", "<password>");
```

# Available functions

1- randomStr(len, options)
2- async login(callback)
3- getRandomInt(max)
4- getOneOf(arrayOfValues)
5-
