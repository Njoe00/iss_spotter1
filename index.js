const { nextISSTimeForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("216.120.205.140", (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned Coordinates:' , data);
// });

// const coords = {latitude: -80 , longitude: -180};

// fetchISSFlyoverTimes(coords , (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned Coordinates:' , data);
// });

const printTimes = function(passTimes) {
  for (let pass of passTimes) {
    const date = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimeForMyLocation((err, passTimes) => {
  if (err) {
    return console.log("It didnt't work!", err);
  }

  console.log(passTimes);
});