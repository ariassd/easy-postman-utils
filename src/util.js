() => {
  /* 
        Author: Luis Arias
        Description: Generate random string.
        @param { number } len Length of the result string
        @param { object } options:
            {
                removeSpaceChar: true | false,
                includeNumbers: true | false,
                includeSpecialChars: true | false,
                hexadecimal: true | false
            }
    */
  var randomStr = (len, options) => {
    let arr = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM ";
    let hex = "1234567890ABCDEF";
    let numbers = "123456789";
    let specialChars = '!"·$%&/()|@#¢';

    if (options) {
      if (options.removeSpaceChar === true) {
        arr = arr.replace(/\s/g, "");
      }
      if (options.includeNumbers === true) {
        arr = arr + numbers;
      }
      if (options.includeSpecialChars === true) {
        arr = arr + specialChars;
      }
      if (options.hexadecimal === true) {
        arr = hex;
      }
    }
    var ans = "";
    for (var i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans.trim();
  };

  /*
        Author: Luis Arias
        Description: Make a login and return the reult token in a callback function.
        @param { function } callback 
            @param object { 
                username: "",
                password: "",
                token: ""
            }
    */
  var login = async (callback) => {
    var resultToken = "";
    const host = pm.variables.get("url");
    const username = pm.variables.get("auth.username");
    const password = pm.variables.get("auth.password");
    const echoPostRequest = {
      url: `${host}/auth/login`,
      method: "POST",
      header: "Content-Type:application/json",
      body: {
        mode: "raw",
        raw: { searchParam: username, password },
      },
    };

    await pm.sendRequest(echoPostRequest, (err, response) => {
      // console.log(response.json());
      resultToken = response.json().refreshToken || response.json().accessToken;
      // console.log('token', resultToken)
      pm.environment.set("bearer", resultToken);
      pm.environment.set("token", resultToken);
      if (typeof callback === "function") {
        callback({ username, password, token: resultToken });
      }
    });
  };

  /*
        Author: Luis Arias
        Description: Gets a random number lower than the parameter
        @param { number } max: Max number to return
    */
  var getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  /*
        Author: Luis Arias
        Description: Gets a random number lower than the parameter
        @param { number } max: Max number to return
    */
  function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  /*
        Author: Luis Arias
        Description: Get a random value from the array sent by parameter.
        @param { Array } arrayOfValues: List of values you want to randomly choose
    */
  var getOneOf = (arrayOfValues) => {
    if (Array.isArray(arrayOfValues)) {
      return arrayOfValues[getRandomInt(arrayOfValues.length)];
    }
  };

  return {
    utils: {
      randomStr,
      login,
      getRandomInt,
      getOneOf,
      getRandomIntBetween,
    },
  };
};
