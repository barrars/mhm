var express = require('express')
var router = express.Router()
const fs = require('fs-extra')
const path = require('path')

var imgArr = {}
router.get('/', function (req, res, next) {
  fs.readdir(path.join(__dirname, './../public/images'))
    .then(dir => {
      // console.log(dir.length)

      dir.forEach((cam, i, arr) => {
        fs.readdir(path.join(__dirname, './../public/images/', cam))
          .then(files => {
            imgArr[arr[i]] = files
            if (Object.keys(imgArr).length === 6) {
              // console.log(imgArr)
              res.render('index', { title: 'Express', imgArr })
            }
          })
      })
    })
    .catch(err => err)
})

module.exports = router
