var cnt1 = false;
var cnt2 = false;
var cnt3 = false;
var cnt4 = false;
var cnt5 = false;
var cnt6 = false;
var cnt7 = false;

$(document).ready(function(){
	$.HideALL();
	var str = window.location.href;
	str = str.substring(str.lastIndexOf("/") + 1);
	switch(str.charAt(0))
	{
		case "1": $(".11").show(); cnt1 = true; break;
		case "2": $(".22").show(); cnt2 = true; break;
		case "3": $(".33").show(); cnt3 = true; break;
		case "4": $(".44").show(); cnt4 = true; break;
		case "5": $(".55").show(); cnt5 = true; break;
		case "6": $(".66").show(); cnt6 = true; break;
		case "7": $(".77").show(); cnt7 = true; break;
		default: alert("error");
	}
});

$("left").ready(function (){
	$(".0").click(function(){
		window.location.replace("../index.html");
	});
});

$("left").ready(function (){
	$(".1").click(function(){
		cnt1 = !cnt1;
		if(cnt1){
			$.HideALL();
			cnt1 = true;
			$(".11").show();
		}
		else
			$(".11").hide();
	});
});

$("left").ready(function (){
	$(".2").click(function(){
		cnt2 = !cnt2;
		if(cnt2){
			$.HideALL();
			cnt2 = true;
			$(".22").show();
		}
		else
			$(".22").hide();
	});
});
$("left").ready(function (){
	$(".3").click(function(){
		cnt3 = !cnt3;
		if(cnt3){
			$.HideALL();
			cnt3 = true;
			$(".33").show();
		}
		else
			$(".33").hide();
	});
});
$("left").ready(function (){
	$(".4").click(function(){
		cnt4 = !cnt4;
		if(cnt4){
			$.HideALL();
			cnt4 = true;
			$(".44").show();
		}
		else
			$(".44").hide();
	});
});
$("left").ready(function (){
	$(".5").click(function(){
		cnt5 = !cnt5;
		if(cnt5){
			$.HideALL();
			cnt5 = true;
			$(".55").show();
		}
		else
			$(".55").hide();
	});
});
$("left").ready(function (){
	$(".6").click(function(){
		cnt6 = !cnt6;
		if(cnt6){
			$.HideALL();
			cnt6 = true;
			$(".66").show();
		}
		else
			$(".66").hide();
	});
});
$("left").ready(function (){
	$(".7").click(function(){
		cnt7 = !cnt7;
		if(cnt7){
			$.HideALL();
			cnt7 = true;
			$(".77").show();
		}
		else
			$(".77").hide();
	});
});

jQuery.extend({
	"HideALL":function(){
		$("#left>a").hide();
		cnt1 = false;
		cnt2 = false;
		cnt3 = false;
		cnt4 = false;
		cnt5 = false;
		cnt6 = false;
		cnt7 = false;
	}
});