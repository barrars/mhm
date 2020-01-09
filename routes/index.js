var express = require('express')
var router = express.Router()
const fs = require('fs-extra')
const path = require('path')
const ninjadb = require('ninjadb')


var imgArr = {}
router.get('/', function (req, res, next) {
	const conditions = ninjadb.create('conditions')
	console.log(conditions.filter().length);
  fs.readdir(path.join(__dirname, './../public/images'))
    .then(dir => {
      dir.forEach((cam, i, arr) => {
        fs.readdir(path.join(__dirname, './../public/images/', cam))
          .then(files => {
            imgArr[arr[i]] = files
            if (Object.keys(imgArr).length === 6) {
              // console.log(imgArr)
              res.render('index', { title: 'Express', imgArr, conditions:conditions.filter() })
            }
          })
      })
    })
    .catch(err => err)
})

module.exports = router
