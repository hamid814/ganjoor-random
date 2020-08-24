const express = require('express');
const axios = require('axios');

const app = express();

app.get('*', async (req, res) => {
  const poem = await axios.get('http://c.ganjoor.net/beyt-json.php?p=7');

  const full =
    "<div style='width: 100vw; text-align: center;'>" +
    "<div style='margin: 0 auto; direction: rtl; padding: 15px; border: 2px solid #222; display: inline-block'>" +
    poem.data.m1 +
    '<br>' +
    poem.data.m2 +
    '<br>' +
    poem.data.poet +
    '</div>' +
    '</div>';

  res.send(full);
});

console.log('app is running');

app.listen(5000, () => console.log('server running on port 5000'));
