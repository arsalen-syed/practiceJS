// messagesI["payload"] -> to get name who has sent and eveything which can be used in the front email



const gmailApisModule = require('./getGmailApis.js');

async function someFunction() {
    const messageList = await gmailApisModule.getGmailResponce('drafts',null); //{q: "is:starred"} {q:"in:sent"}
    console.log(messageList["messages"][0]["id"]);
    // console.log(messageList)


    const messagesI = await gmailApisModule.getGmailResponce(`messages/${messageList["messages"][0]["id"]}`, null)
    console.log(messagesI["payload"]["headers"]) //13 15 16 18 ["payload"]["headers"][13]
    const decodedString = Buffer.from(messagesI["payload"]["parts"][0]["body"]["data"], 'base64').toString('utf-8');
    console.log(decodedString) //["payload"]["headers"]
}

someFunction();

// users email from this - 0
// { name: 'Delivered-To', value: 'arsalensyed1226@gmail.com' },

// Date - 13
// { name: 'Date', value: 'Sun, 05 Sep 2021 13:51:28 +0000' },

// Title(subject) - 15
// { name: 'Subject', value: 'Saif Ali mentioned you in Research API' },

// from - 16
// { name: 'From', value: 'Notion <notify@mail.notion.so>' },

// user full mail - 18
//  get text inside a mail - messagesI["payload"]["parts"][0]["body"]["data"] --> index [1] to get data in html format
//                          const decodedString = Buffer.from(messagesI["payload"]["parts"][0]["body"]["data"], 'base64').toString('utf-8');
                          


// const decodedString = 'Hello World!';
// const preElement = document.getElementById('decoded-string');
// preElement.textContent = decodedString;
