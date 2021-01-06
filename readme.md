# mke-postman-utils (Make it easy postman utils)

You really want to use Postman like a pro!

Mke-postman-utils is a script that contains several functions that helps you to make automatization on your requests

# Installation

1- Make a new get request
2- Add the following script to your pre request script

```javascript
pm.sendRequest("https://github.com/ariassd/mke-postman-utils/v1.1/src/mke-postam-util.js", function (err, response) {
  postman.setEnvironmentVariable("mke-utils", response);
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

# Sample of use

_Pre request script_

```javascript
const utils = eval(pm.environment.get("mke-utils"))().utils;
utils.login((result) => {
  console.log(`you are logged in`);
  console.log(result);
});

const products = {
  creditCard: ["deposit", "debit"],
  creditsAuthorization: ["note", "scheduled", "rejection"],
  client: ["creation", "blacklist", "products"],
};

const product = utils.getOneOf(Object.keys(products));
const subproduct = utils.getOneOf(products[product]);
const detail = utils.randomStr(100);
const subject = detail.substring(0, 10);

pm.variables.set("product", product);
pm.variables.set("subproduct", subproduct);
pm.variables.set("detail", detail);
pm.variables.set("subject", subject);
```

_Request body_

```json
{
  "user": "{{$guid}}",
  "product": "{{product}}",
  "subProduct": "{{subproduct}}",
  "subject": "{{subject}}",
  "details": "{{detail}}"
}
```

_**1st** Request made to the server_

```json
{
  "_id": "5ff5f6d270b52c45d9c6523c",
  "user": "ebd4d30a-3f01-4192-a19a-d63dac157f2b",
  "product": "creditCard",
  "subProduct": "deposit",
  "subject": "p gm sy EV",
  "details": "p gm sy EVD K GbfYH JZbCfRbZZUvaLDL SCsu LTETiEUQGSI   XWAnxDspfVy osfVBU ZnBiGc GDkfF nysNPfPOIPjvA",
  "createdAt": "2021-01-06T17:43:46.311Z",
  "updatedAt": "2021-01-06T17:43:46.311Z",
  "__v": 0
}
```

_**2nd** request made to the server_

```json
{
  "_id": "5ff5f74170b52c45d9c6523d",
  "user": "639b617e-ce12-4507-8825-3ad5d86cedc0",
  "product": "client",
  "subProduct": "blacklist",
  "subject": "jp hvICuSd",
  "details": "jp hvICuSd ZadlSIbCpdp kraQpvJcguWzUdqVBg fUlzU CPe  K YfGviPnPpaDVljZgkCUfLTWWI  oCgKOkgJZKxFLQl S",
  "createdAt": "2021-01-06T17:45:37.458Z",
  "updatedAt": "2021-01-06T17:45:37.458Z",
  "__v": 0
}
```
