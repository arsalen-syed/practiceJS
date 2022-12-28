const request = require('request');

const apiEndpoint = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/1855831709a76ab2';
const accessToken = 'ya29.a0AX9GBdUWGArw6E-HZss754Nkr48xMfl0UkQK5Xz2i1dl67CWE1zcmhkFWIa_tzCPj7OEItNqmJMbZbjLvUeT-NQC6IEbI0IsOs8z-kmT-Q-xsBt7B3DegMey9No5RABl-nZxUGtLDTUA6fMw7T8hSdg8ytdI3_UaCgYKASYSAQASFQHUCsbCVgtBv0rWpj3V6rs4Xp811A0166';

request.get(apiEndpoint, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
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
  