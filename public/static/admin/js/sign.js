﻿window.onresize=function(){layer();setPosition()};function layer(){var a=document.documentElement;relHeight=(a.clientHeight>a.scrollHeight)?a.clientHeight:a.scrollHeight;document.getElementById("Layer").style.height=relHeight+"px";relWidth=(a.clientWidth>a.scrollWidth)?a.scrollWidth:a.clientWidth;document.getElementById("Layer").style.width=relWidth+"px"}layer();function setPosition(){var c=document.documentElement;var b=(c.clientHeight-6-document.getElementById("login").offsetHeight)/2;var a=(c.clientWidth-5-document.getElementById("login").offsetWidth)/2;$(login).css({top:b,left:a})}setPosition();function getCode(){$.ajax({url:"http://10.118.35.182/2tp5/public/static/admin/getCode.php/"+(Math.random(),type:"POST",dataType:"json",success:function(a){document.getElementById("code_1").value=a}})}getCode();function shuaxin(){document.getElementById("code").src="http://10.118.35.182/tp5/public/static/admin/VerificationCode.php?"+Math.random();var a=getCode();document.getElementById("code_1").value=a}function check(){var g=document.getElementById("txt_1").value.trim();var l=document.getElementById("txt_2").value.trim();var m=document.getElementById("code_content").value.trim();var h=document.getElementById("txt_1info");var f=document.getElementById("txt_2info");var d=document.getElementById("code_info");var k=1;var j=1;var i=1;var e=/^[1][3,4,5,7,8][0-9]{9}$/;if(!e.test(g)){h.innerHTML="格式错误";k=0}if(l==""){f.innerHTML="格式错误";j=0}else{if(l.length<6){f.innerHTML="格式错误";j=0}}if(m.toLowerCase()!=document.getElementById("code_1").value.toLocaleLowerCase()){d.innerHTML="验证码错误";i=0}if(k=="0"||j=="0"||i=="0"){return false}}function checkemail(){var b=document.getElementById("txt_1");var a=document.getElementById("txt_1info");var c=/^[1][3,4,5,7,8][0-9]{9}$/;if(!c.test(b.value.trim())){a.innerHTML="格式错误";a.style.color="red";return false}else{a.innerHTML="格式正确";a.style.color="green";return true}}function checkpassword(){var b=document.getElementById("txt_2").value.trim();var a=document.getElementById("txt_2info");if(b==""){a.innerHTML="格式错误";a.style.color="red";return false}else{if(b.length<6){a.innerHTML="格式错误";a.style.color="red";return false}else{a.innerHTML="格式正确";a.style.color="green"}}};