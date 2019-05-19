const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': '4jjphhdum2jypfqzd7hrli6cgf8rpr',
    },
  },
  (error, response, body) => {
    const { data } = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  },
);
