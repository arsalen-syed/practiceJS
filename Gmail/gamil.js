const axios = require('axios');

const fetchGitUserDetails = (username) => {
    const headers = {
      Authorization: `Bearer ya29.a0AX9GBdWw-3aHo1pVDEo4i7zpxHpRwaoStzCf-DlYPHvdDWhIGRReHaxiaxoxchsys2r1PW4IkSxDD9y98S0DYnAWdIzvCs7M9dqaoZsea-ackCEQK78coDm4AXBiRwiZH39j786vNg6JcHe6UfgnhRKMNjjLaCgYKAU4SARESFQHUCsbCGFiHg9R5hhsCcgSt10FBsA0163"`,
    };
    return axios.default
      .get(
        `https://gmail.googleapis.com/gmail/v1/users/sanghavi258@gmail.com/messages/${username}`,
        { headers }
      )
      .then((response) => response.data)
      .then((user) => transform(user))
      .catch((error) => {
        console.error(error);
        // You can return a default value or throw an error here
        // depending on how you want to handle failures
      });
  };

const main = async () => {
    const username = "18556aaaf2cfed13";
    const response = await fetchGitUserDetails(username);
    console.log(response);
  };
  
  main();
  