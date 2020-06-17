
// 원인 불명의 버그 해결을 위해 setTimeout을 이용
function linkToSignin() {
	setTimeout(function() {
		location.href = "users.html?#signin";
	}, 0);	
}

function linkToSignup() {
	setTimeout(function() {
		location.href = "users.html?#signup";
	}, 0);
}

function gotoSignup() {
	$('.link-Signup').addClass("active");
	$('.link-Signin').removeClass("active");
	$('#responsive-menu').removeAttr("checked");
	$('#container').addClass("right-panel-active");
}

function gotoSignin() {
	$('.link-Signin').addClass("active");
	$('.link-Signup').removeClass("active");
	$('#responsive-menu').removeAttr("checked");
	$('#container').removeClass("right-panel-active");
}


// 버튼에 이벤트 설정
$('.signInBtn').click(() => {
	linkToSignin();
});

$('.signUpBtn').click(() => {
	linkToSignup();
});


// 페이지 첫 로딩 시, 해쉬에 따른 페이지 출력
window.onload=function(){
	switch (location.hash) {
		case "#signin":
			this.gotoSignin();
			break;

		case "#signup":
			this.gotoSignup();
			break;
	}
}


// URL 해시 변경 시, 해쉬에 따른 페이지 출력
window.onhashchange = function() {
	this.console.log(location.hash);
	switch (location.hash) {
		case "#signin":
			this.gotoSignin();
			break;

		case "#signup":
			this.gotoSignup();
			break;
	}
};