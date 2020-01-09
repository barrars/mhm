let isPlaying = false;
let i = 0;
var play;
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const forwardButton = document.getElementById("forward");
const backwardButton = document.getElementById("backward");
const timeline = document.getElementById("timeline");
const conditions = document.getElementById("conditions");
const timeStamp = document.getElementById("timeStamp");
const images = document.getElementsByTagName("img");
const {date, temp, wind, condition} = weather[i]
for (const key in data) {
  var img = new Image();
  img.id = key;
  img.src = `images/${key}/${data[key][0]}`;
  img.style.width = 250 + "px";
  document.body.append(img);
}
timeline.range = data.base.length;
timeStamp.innerText = `${date} | ${temp} | ${wind} | ${condition} |`
conditions.setAttribute('data-conditions', condition.toLowerCase())
timeline.addEventListener("input", () => {
  i = Math.floor((timeline.value / 100) * data.base.length);
  clearInterval(play);
  if (data.base[i]) {
    isPlaying = false;
		timeStamp.innerText = `${date} | ${temp} | ${wind} | ${condition} |`

		conditions.setAttribute('data-conditions', condition.toLowerCase())
    for (const c of images) {
      c.src = `images/${c.id}/${data[c.id][i]}`;
    }
  }
});
function animate() {
	if (data.base[i + 1]) {
    timeStamp.innerText = `${date} | ${temp} | ${wind} | ${condition} |`
		timeline.value = 100 * (i / data.base.length);
		conditions.setAttribute('data-conditions', condition.toLowerCase())

    i++;
  } else {
    i = 0;
  }
  for (const c of images) {
    c.src = `images/${c.id}/${data[c.id][i]}`;
  }
}
playButton.addEventListener("click", () => {
  if (!isPlaying) {
    play = setInterval(animate, 200);
    isPlaying = true;
  }
});
pauseButton.addEventListener("click", () => {
  isPlaying = false;
  clearInterval(play);
});
