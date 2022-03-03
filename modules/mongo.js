import axios from 'axios'

export default function () {

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/api/iquestions', getAllQuestions)
  })

  async function getAllQuestions(req, res, next) {

    var data = JSON.stringify({
      "collection": "questions",
      "database": "CareerInformaticsDB",
      "dataSource": "BLawMongoCluster",
      "filter": { "tags": "Basic" }
    })

    var url = 'https://data.mongodb-api.com/app/data-itrtd/endpoint/data/beta/action/find';

    var headers = {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.MONGOAPIKEY
    }

    const response = await axios.post(url, data, { headers });
    sendJSON(response.data, res);
  }

  function sendJSON(data, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }

}
