const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  "364404492661-gonu85chagoe70ltnh74t1fa1c3vt562.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/oauth2callback"
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.readonly'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});


// const { google } = require('googleapis');
//   const oAuth2Client = new google.auth.OAuth2(
//   GMAIL_CLIENT_ID, CLIENT_SECRET, 'http://localhost:3000');
//   oAuth2Client.getToken(code, (err, token) => {
//        if (err) return console.log('access   token', err);
//        console.log(token);
// }

// GET /oauthcallback?code={"4/0AWgavdeYaawZquJs5TGZhoWzd3jOGLvJE18pkzW8SI0PC5fZlrmGyOmzXkhWz5HGpIw_Bg"}

// This will provide an object with the access_token and refresh_token.
// Save these somewhere safe so they can be used at a later time.
const {tokens} = await oauth2Client.getToken(code)
oauth2Client.setCredentials(tokens);

oauth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      // store the refresh_token in my database!
      console.log(tokens.refresh_token);
    }
    console.log(tokens.access_token);
  });