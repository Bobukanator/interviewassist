import axios from 'axios'
import bodyParser from 'body-parser'

export default function () {

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(bodyParser.json());
    app.use('/api/iquestions', getAllQuestions);
    app.use('/api/iquestionsbytag', getQuestionsbyTag);
    app.use('/api/skills', getAllSkills);
  })

  async function getQuestionsbyTag(req, res) {

    const body = req.body;
    if (!body || !body.tags) {
      return rejectHitBadRequest(res)
    }

    const tags = body.tags;

    var data = JSON.stringify({
      "collection": "questions",
      "database": "CareerInformaticsDB",
      "dataSource": "BLawMongoCluster",
      "filter": { "tags": { "$in": tags } }
    })

    callTheDB(data, res);

  }

  async function getAllQuestions(req, res, next) {

    var data = JSON.stringify({
      "collection": "questions",
      "database": "CareerInformaticsDB",
      "dataSource": "BLawMongoCluster",
      "filter": { "tags": "Basic" }
    })

    callTheDB(data, res);

  }

  async function getAllSkills(req, res, next) {

    var data = JSON.stringify({
      "collection": "skills",
      "database": "CareerInformaticsDB",
      "dataSource": "BLawMongoCluster",
      "limit": 10000
    })

    callTheDB(data, res);

  }

  async function callTheDB(data, res) {
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

  function rejectHitBadRequest(res) {
    res.statusCode = 400
    res.end()
  }

}
