const { OAuth2Client } = require('google-auth-library');

async function getAccessToken(refreshToken) {
  const clientId = '935220894244-2bi98lpomkkghj042slh2m3j431o4emr.apps.googleusercontent.com';
  const clientSecret = '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';

  const client = new OAuth2Client(clientId, clientSecret, 'http://localhost:3000/oauth2callback');
  const res = await client.getToken(refreshToken);
  return res.tokens.access_token;
}



// const accessToken = getAccessToken(refresh_token)


// async function main() {
//   refresh_token =  "1//0gUl06uvgZlHxCgYIARAAGBASNwF-L9IrDn4pBO6KFsBXo0F0Ct34cqJ5kRcCoJrbHjhElMJn7IZqh60SXqr-mzU3784qhJRYrro";
//   const accessToken = await getAccessToken(refresh_token);
//   console.log(accessToken);
// }

// main();


// refresh_token=1%2F%2F0gUl06uvgZlHxCgYIARAAGBASNwF-L9IrDn4pBO6KFsBXo0F0Ct34cqJ5kRcCoJrbHjhElMJn7IZqh60SXqr-mzU3784qhJRYrro&client_id=935220894244-2bi98lpomkkghj042slh2m3j431o4emr.apps.googleusercontent.com&client_secret=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&grant_type=refresh_token',