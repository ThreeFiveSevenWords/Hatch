var express = require('express')
var router = express.Router()
// require("../serve/stack/index")
/* GET stack page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '栈' })
})

module.exports = router
