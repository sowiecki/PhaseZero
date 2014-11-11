window.onload = resize
window.onresize = resize
var r1440 = "700", r1080 = "600", r720 = "90%";
function resize() {
	if (window.innerWidth <= 720) {
		document.getElementById("display_mode").innerHTML = "Display mode: 720p";
		document.getElementById("backing").style.width = r720;
		document.getElementById("gwrap").style.width = r720;
		for(var i = 0, elems = document.getElementsByTagName("header"); i < elems.length; i++) { elems[i].style.width = r720; }
		for(var i = 0, elems = document.getElementsByTagName("footer"); i < elems.length; i++) { elems[i].style.width = r720; }
	}
	else if (window.innerWidth <= 1080) {
		document.getElementById("display_mode").innerHTML = "Display mode: 1080p";
		document.getElementById("backing").style.width = r1080;
		document.getElementById("gwrap").style.width = r1080;
		for(var i = 0, elems = document.getElementsByTagName("header"); i < elems.length; i++) { elems[i].style.width = r1080; }
		for(var i = 0, elems = document.getElementsByTagName("footer"); i < elems.length; i++) { elems[i].style.width = r1080; }
	}
	else {
		document.getElementById("display_mode").innerHTML = "Display mode: 1440p";
		document.getElementById("backing").style.width = r1440;
		document.getElementById("gwrap").style.width = r1440;
		for(var i = 0, elems = document.getElementsByTagName("header"); i < elems.length; i++) { elems[i].style.width = r1440; }
		for(var i = 0, elems = document.getElementsByTagName("footer"); i < elems.length; i++) { elems[i].style.width = r1440; }
	}
}