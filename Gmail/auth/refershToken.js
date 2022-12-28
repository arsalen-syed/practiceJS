const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  "935220894244-2bi98lpomkkghj042slh2m3j431o4emr.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/oauth2callback"
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/blogger',
  'https://www.googleapis.com/auth/calendar'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});


// GET /oauthcallback?code={"4/0AWgavdeYaawZquJs5TGZhoWzd3jOGLvJE18pkzW8SI0PC5fZlrmGyOmzXkhWz5HGpIw_Bg"}

// This will provide an object with the access_token and refresh_token.
// Save these somewhere safe so they can be used at a later time.
// const {tokens} = await oauth2Client.getToken(code)
// oauth2Client.setCredentials(tokens);

// oauth2Client.on('tokens', (tokens) => {
//     if (tokens.refresh_token) {
//       // store the refresh_token in my database!
//       console.log(tokens.refresh_token);
//     }
//     console.log(tokens.access_token);
//   });