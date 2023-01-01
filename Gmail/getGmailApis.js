const request = require('request');
const authorizeModule = require('./accessToken.js');

module.exports = {
  getGmailResponce: async function (endPoint, qs) {
    const apiEndpoint = `https://gmail.googleapis.com/gmail/v1/users/me/${endPoint}`;
    const accessTokenVar = await authorizeModule.authorize();
    const options = {
      headers: {
        'Authorization': `Bearer ${accessTokenVar["access_token"]}`
      },
      qs: qs
    };

    return new Promise((resolve, reject) => {
      request.get(apiEndpoint, options, (error, response, body) => {
        // success!
        const profile = JSON.parse(body);
        resolve(profile);
      });
    });
  }
};



// const request = require('request');
// const authorizeModule = require('./accessToken.js');

// module.exports = {
//   getGmailResponce: async function(endPoint){

//   const apiEndpoint = `https://gmail.googleapis.com/gmail/v1/users/me/${endPoint}`;
//   const accessTokenVar = await authorizeModule.authorize()
//   console.log(accessTokenVar["access_token"])
//   request.get(apiEndpoint, {
//       headers: {
//         'Authorization': `Bearer ${accessTokenVar["access_token"]}`
//       }
//     }, (error, response, body) => {
//       if (error) {
//         console.error(error);
//       } else {
//         if (response.statusCode === 200) {
//           // success!
//           const profile = JSON.parse(body);
//           console.log(profile)
//           return profile
//         } else {
//           console.error(`API returned status code ${response.statusCode}: ${response.statusMessage}`);
//         }
//       }
//     });
//   }
// };

// // const request = require('request');

// // export function getGmailResponce(endPoint, accessToken){
// //   const apiEndpoint = `https://gmail.googleapis.com/gmail/v1/users/me/${endPoint}`;
// //   request.get(apiEndpoint, {
// //       headers: {
// //         'Authorization': `Bearer ${accessToken}`
// //       }
// //     }, (error, response, body) => {
// //       if (error) {
// //         console.error(error);
// //       } else {
// //         if (response.statusCode === 200) {
// //           // success!
// //           const profile = JSON.parse(body);
// //           // return profile
// //           console.log(profile)
// //         } else {
// //           console.error(`API returned status code ${response.statusCode}: ${response.statusMessage}`);
// //         }
// //       }
// //     });
// //   }

