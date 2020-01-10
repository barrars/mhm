const wget = require('wget')
const cheerio = require('cheerio')
const axios = require('axios')
const ninjadb = require('ninjadb')
const conditions = ninjadb.create('conditions')



const cams = {
  vista: 'https://www.skihood.com/cams/vista',
  base: 'https://www.skihood.com/cams/base',
  vstop: 'https://www.skihood.com/cams/vstop',
  casc: 'https://www.skihood.com/cams/casc',
  sahale: 'https://www.skihood.com/cams/sahale',
  top: 'https://www.skihood.com/cams/top'
}


const mhm = () => {
  setInterval(() => {
		axios.get('https://www.skihood.com/en/the-mountain/conditions').then((response) => {

	const $ = cheerio.load(response.data)
	let temp = $('#ctl17 > section > section > div > div.conditions-snapshot > div.conditions-glance-widget.conditions-current > dl > dd.reading.temperature').text()
	let wind = $('#ctl17 > section > section > div > div.conditions-snapshot > div.conditions-glance-widget.conditions-at-elevations > div:nth-child(1) > dl > dd.reading.windspeed').text()
	let condition = $('#ctl17 > section > section > div > div.conditions-snapshot > div.conditions-glance-widget.conditions-current > dl > dd.reading.conditions').text()
	// console.log(temp, wind, condition)
	conditions.push({
		date:new Date().toLocaleString(),
		temp,
		wind,
		condition
	})

})
    for (const key in cams) {
      const date = new Date()
      const src = cams[key]
      const output = `./public/images/${key}/${date.valueOf()}.jpg`
      wget.download(src, output)
    }
  }, 300000)
}

module.exports = mhm()


