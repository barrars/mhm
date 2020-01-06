// console.log(data)

for (const key in data) {
  var img = new Image()
  img.id = key
  img.src = `images/${key}/${data[key][1]}`
  img.style.width = 250 + 'px'
  document.body.append(img)
}

var images = document.getElementsByTagName('img')
let i = 0

function animate () {
  for (const c of images) {
    c.src = `images/${c.id}/${data[c.id][i]}`
    // console.log(c.id)
    // console.log(c.src)
  }
}

setInterval(() => {
  // console.log('-------------------------------------')
  // console.log(i)

  if (data.base[i + 1]) {
    i++
  } else {
    i = 0
  }
  animate()
}, 500)

// images.item(i).src =
// `images/${images.item(i).id}/${data[images.item(i).id][i]}`

// `images/${images.item(i).id}/${data[images.item(i).id][i]}`

