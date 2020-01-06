const wget = require('wget')
const cams = {
  vista: 'https://www.skihood.com/cams/vista',
  base: 'https://www.skihood.com/cams/base',
  vstop: 'https://www.skihood.com/cams/vstop',
  casc: 'https://www.skihood.com/cams/casc',
  sahale: 'https://www.skihood.com/cams/sahale',
  top: 'https://www.skihood.com/cams/top'
}

for (const key in cams) {
  const date = new Date()
  const src = cams[key]
  const output = `./public/images/${key}/${date.valueOf()}.jpg`
  wget.download(src, output)
}
const mhm = () => {
  setInterval(() => {
    for (const key in cams) {
      const date = new Date()
      const src = cams[key]
      const output = `./public/images/${key}/${date.valueOf()}.jpg`
      wget.download(src, output)
    }
  }, 300000)
}

module.exports = mhm()
