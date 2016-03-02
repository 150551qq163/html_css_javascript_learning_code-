function onFocus() {
	document.getElementById("name").innerHTML = "请输入姓名";
}
function onBlur() {
	document.getElementById("name").innerHTML = "";
}
function onMouseOver() {
	document.getElementById("age").innerHTML = "age";
}
function onMouseOut() {
	document.getElementById("age").innerHTML = "";
}
function getChecked() {
	var form = document.forms["myForm"];
	var hobbies = form.hobby;
	for (var i = 0; i < hobbies.length; i++) {
		if (hobbies[i].checked) {
			alert(hobbies[i].value);
		}
	}
}
function getSex() {
	var sex = document.forms["myForm"].sex;
	for (var int = 0; int < sex.length; int++) {
		if (sex[int].checked) {
			alert(sex[int].value);
		}
	}
}
function selectFunc() {
//	alert("select");
	var form=document.forms["myForm"];
	var city = form.city;
	alert(city.selectedIndex);
	var cities = city.options;
	alert(cities.selectedIndex);
	alert(cities[cities.selectedIndex].value);
}
function moveFunc(){
	document.getElementById("div1").innerHTML=document.getElementById("img1").getAttribute("alt");
}
function mouseOver() {
	document.getElementById("div2").innerHTML=document.getElementById("img1").getAttribute("alt");
}
function mouseOut(){
	document.getElementById("div2").innerHTML="";
}
function mouseDown() {
	document.getElementById("div2").innerHTML="按下";
}
function mouseUp() {
	document.getElementById("div2").innerHTML="放开";
}

