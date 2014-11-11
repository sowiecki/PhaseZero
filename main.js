window.onresize = resize
	function resize()
	{

	if (window.innerWidth <= 1280) {
		document.getElementById("backing").style.width="80%"; }
	else {
		document.getElementById("backing").style.width="50%";
	}

	if (window.innerWidth <= 1280) {
		document.getElementById("gwrap").style.width="80%"; }
	else {
		document.getElementById("gwrap").style.width="50%";
	}

	for(var i = 0, elems = document.getElementsByTagName("header"); i < elems.length; i++) {
		if (window.innerWidth <= 1280) {
			elems[i].style.width="80%"; }
		else {
			elems[i].style.width="50%";
		}
	};

	for(var i = 0, elems = document.getElementsByTagName("footer"); i < elems.length; i++) {
		if (window.innerWidth <= 1280) {
			elems[i].style.width="80%"; }
		else {
			elems[i].style.width="50%";
		}
	};
}