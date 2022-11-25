const request = require("request");

// const fetchMyIP = function(callback) {
//   request("https://api.ipify.org?format=json", (err, response, body) => {
//     if (err) {
//       callback(err, null);
//       return;
//     }
//     // if non-200 status, assume server error
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     } else {
//       const ip = JSON.parse(body).ip;
//       callback(null, ip);
//     }
//   });
// };

// const fetchCoordsByIP = function(ip, callback) {
//   request(`http://ipwho.is/${ip}`,(err, response, body) => {

//     if (err) {
//       callback(err, null);
//       return;
//     }
//     const jsonBody = JSON.parse(body)

//     if (!jsonBody.success) {
//       const msg = `Failure message: ${jsonBody} for IP ${jsonBody.ip}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const {latitude, longitude} = jsonBody;

//     callback(null, {latitude, longitude});
//   });
// };

const fetchISSFlyoverTimes = function(coords, callback) {
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode}`), null);
      return;
    }
    const data = JSON.parse(body).response;
    callback(null, data);
  });
};

module.exports = {fetchISSFlyoverTimes};