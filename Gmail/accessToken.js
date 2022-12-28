const request = require('request');

async function authorize() {
//   const { client_secret, client_id } = credentials.json;
  const options = {
    method: 'POST',
    url: 'https://www.googleapis.com/oauth2/v4/token',
    headers: { 'content-type': 'application/json' },
    body: {
      grant_type: 'refresh_token',
      client_id: "935220894244-2bi98lpomkkghj042slh2m3j431o4emr.apps.googleusercontent.com",
      client_secret: "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",
      refresh_token: "1//0gUl06uvgZlHxCgYIARAAGBASNwF-L9IrDn4pBO6KFsBXo0F0Ct34cqJ5kRcCoJrbHjhElMJn7IZqh60SXqr-mzU3784qhJRYrro"
    },
    json: true
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        // console.log('my token: ' + body.access_token);
        resolve({
          access_token: body.access_token,
          response
        });
      }
    });
  });
}

(async () => {
  try {
    const result = await authorize();
    let access_token = result['access_token'];
    console.log(access_token)
  } catch (error) {
    console.error(error);
  }
})();

