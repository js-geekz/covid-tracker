const { NovelCovid } = require('novelcovid')

const covid = new NovelCovid()

exports.getCases = async (req, res) => {
  let countryWiseData = await covid.countries()

  const query = req.query

  if (query.limit) {
    countryWiseData = countryWiseData.slice(0, +query.limit)
  }

  res.json(countryWiseData)
}
