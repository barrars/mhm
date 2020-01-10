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
const {date, temp, wind, condition} = weather[i-1] || weather[0]
for (const key in data) {
	var img = new Image();
  img.id = key;
  img.src = `images/${key}/${data[key][0]}`;
  img.style.width = 250 + "px";
  document.body.append(img);
}
timeline.setAttribute('max', data.base.length -1)
// console.log(data.base.length);

timeStamp.innerText = `${date.toLocaleString()} | ${temp} | ${wind} | ${condition} |`
conditions.setAttribute('data-conditions', condition.toLowerCase())
timeline.addEventListener("input", () => {
	// console.log(timeline.value);

	const {date, temp, wind, condition} = weather[i] ||weather[i-1]
  i = timeline.value
  clearInterval(play);
  if (data.base[i -1 ]) {
		isPlaying = false;
		timeStamp.innerText = `${date.toLocaleString()} | ${temp} | ${wind} | ${condition} |`

		conditions.setAttribute('data-conditions', condition.toLowerCase())
    for (const c of images) {
			c.src = `images/${c.id}/${data[c.id][i]}`;
    }
  }
});
function animate() {
	i++;
	if (data.base[i]) {
		const {date, temp, wind, condition} = weather[i] || weather[i-1]
    timeStamp.innerText = `${date.toLocaleString()} | ${temp} | ${wind} | ${condition} |`
		timeline.value = i
		conditions.setAttribute('data-conditions', condition.toLowerCase())
		for (const c of images) {
			c.src = `images/${c.id}/${data[c.id][i]}`;
		}
  } else {
    i = 0;
  }
}
playButton.addEventListener("click", () => {
  if (!isPlaying) {
    play = setInterval(animate, 320);
    isPlaying = true;
  }
});
pauseButton.addEventListener("click", () => {
  isPlaying = false;
  clearInterval(play);
});
