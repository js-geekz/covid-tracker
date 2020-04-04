const express = require('express');
const {
  NovelCovid
} = require('novelcovid');
const cors = require('cors');

let app = express();
const covid = new NovelCovid();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.static('dist'));

app.get('/get-all', async (req, res) => {
  let countryWiseData = await covid.countries();

  const query = req.query;

  if (query.limit) {
    countryWiseData = countryWiseData.slice(0, +query.limit);
  }

  res.json(countryWiseData);
});

app.listen(8000, () => console.log('Example app listening on port 8000!'));