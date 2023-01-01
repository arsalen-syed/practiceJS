const request = require('request');

// import { getAccessToken } from accessToken.js;

const apiEndpoint = 'https://gmail.googleapis.com/gmail/v1/users/me/labels';
const accessToken = 'ya29.a0AX9GBdW5WhxMh-7AvkF-ap4Z-Au4Lh6Khffg1ZFDeDg4bvi4bBiebTITYaJcCRzjeGpbfMnPTGEyrPueHhrv6jqhpHbai-w0z-OPutQ_CtZbN6S9QYl0tOUzIk6lXWmg4IqfqrhtYmXwCO9vZS4dUn5e5kvLdxD3aCgYKAT8SAQASFQHUCsbCKocH1uBMIPoaF0jJCXRNIw0167';

const labels = {
  "id": "INBOX",
  "name": "Inbox",
  "messageListVisibility": "show",
  "labelListVisibility": "labelShow",
  "type": "system",
  "messagesTotal": 10,
  "messagesUnread": 2,
  "threadsTotal": 5,
  "threadsUnread": 1,
  "color": {
    "textColor": "#ffffff",
    "backgroundColor": "#d14836"
  }
}

request.post(apiEndpoint, {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(labels)
}, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      // success!
      const profile = JSON.parse(body);
      console.log(profile);
    } else {
      console.error(`API returned status code ${response.statusCode}: ${response.statusMessage}`);
    }
  }
});
