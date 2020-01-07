var play

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const forwardButton = document.getElementById("forward");
const backwardButton = document.getElementById("backward");
const timeline = document.getElementById("timeline");

for (const key in data) {
  var img = new Image();
  img.id = key;
  img.src = `images/${key}/${data[key][31]}`;
  img.style.width = 250 + "px";
  document.body.append(img);
}

var images = document.getElementsByTagName("img");
let i = 0;

timeline.addEventListener('input', ()=>{
i = (Math.floor((timeline.value /100) * data.base.length))
	clearInterval(play)
	for (const c of images) {
		c.src = `images/${c.id}/${data[c.id][i]}`;
	}

})

function animate () {
	if (data.base[i + 1]) {
		timeline.value = 100 *(i / data.base.length)
		// i = (timeline.value /100) * data.base.length
		i++;
	} else {
		i = 0;
	}
	for (const c of images) {
		c.src = `images/${c.id}/${data[c.id][i]}`;
	}
}

playButton.addEventListener("click", () => {
  play = setInterval(animate, 500);

});
var hello
pauseButton.addEventListener("click", () => {
	console.log(i);
	clearInterval(play)
});


