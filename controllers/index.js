const indexPage = require('../views/index')

module.exports = {
  getLanding(req, res, next) {
    res.send(indexPage())
  }
}