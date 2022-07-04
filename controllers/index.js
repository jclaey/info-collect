const indexPage = require('../views/index')

module.exports = {
  getIndex(req, res, next) {
    res.send(indexPage())
  },
  getPost(req, res, next) {
    
  }
}