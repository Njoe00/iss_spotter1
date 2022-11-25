const request = require("request");



const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    }
  });
};


module.exports = {fetchMyIP};