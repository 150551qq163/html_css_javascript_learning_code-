function checkAge() {
	var age = document.getElementById("age").value;
	var div = document.getElementById("div");
	if (/^[0-9]{1,3}$/.test(age)) {
		div.innerHTML = "验证通过";
	} else {
		div.innerHTML = "验证错误";
	}
}
function checkNumber() {
	var number = document.getElementById("number").value;
	if (/^\d*\.?\d+$/.test(number)) {
		document.getElementById("div2").innerHTML = "验证通过";
	} else {
		document.getElementById("div2").innerHTML = "验证失败";
	}
}
function checkPostcode() {
	var number = document.getElementById("postcode").value;
	if (/^\d{6}$/.test(number)) {
		document.getElementById("div3").innerHTML = "验证通过";
	} else {
		document.getElementById("div3").innerHTML = "验证失败";
	}
}
function checkPhone() {
	var number = document.getElementById("phone").value;
	if (/^\d{11,12}$/.test(number)) {
		document.getElementById("div4").innerHTML = "验证通过";
	} else {
		document.getElementById("div4").innerHTML = "验证失败";
	}
}
function checkIdentify() {
	var id = document.getElementById("identify").value;
	if (/^\d{15}$/.test(id) || /^\d{17}(?:\d|x)$/.test(id)) {
		document.getElementById("div5").innerHTML = "验证通过";
	} else {
		document.getElementById("div5").innerHTML = "验证失败";
	}
}
function chechWordOrNumber() {
	var word = document.getElementById("chechWordOrNumber").value;
	if (/^\w+$/.test(word)) {
		document.getElementById("div6").innerHTML = "验证通过";
	} else {
		document.getElementById("div6").innerHTML = "验证失败";
	}
}
function chechEmail() {
	var email = document.getElementById("email").value;
	if (/^\w+([+-.]\w+)*@\w+([-.]\w)*\.\w+([-.]\w)*$/.test(email)) {
		document.getElementById("div7").innerHTML = "验证通过";
	} else {
		document.getElementById("div7").innerHTML = "验证失败";
	}
}