function runFunc() {
	var elem = document.getElementById("runanim");
	var img = document.getElementById("herunnin");
	var pos = 0;
	var id = setInterval(frame, 1);
	img.style.opacity = 1;
	function frame() {
		if (pos == 2000) {
		clearInterval(id);
		} else {
		pos++
		elem.style.right = pos + 'px';
		}
	}
}
