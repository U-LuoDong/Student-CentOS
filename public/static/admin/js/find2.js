window.onresize=function(){layer();setPosition3()};function layer(){var a=document.documentElement;relHeight=(a.clientHeight>a.scrollHeight)?a.clientHeight:a.scrollHeight;document.getElementById("Layer").style.height=relHeight+"px";relWidth=(a.clientWidth>a.scrollWidth)?a.scrollWidth:a.clientWidth;document.getElementById("Layer").style.width=relWidth+"px"}layer();var Function_3_class_se=document.getElementById("Function_3_cl");var F3_BJoptions=Function_3_class_se.options;var F3_BJselectedText=F3_BJoptions[0].text;function F3_ChangeCl(){var a=Function_3_class_se.selectedIndex;F3_BJselectedText=F3_BJoptions[a].text}var Function_3_info=document.getElementById("Function_3_info");Function_3_info.style.display="block";function setPosition3(){var b=document.documentElement;var a=(b.clientWidth-5-Function_3_info.offsetWidth)/2;$(Function_3_info).css({left:a})}setPosition3();Function_3_info.style.display="none";var layer1=document.getElementById("Layer");function out3(){Function_3_info.style.display="block";layer1.style.display="block";$("#Function_3_t tbody").html("");layer();setPosition3();GeneratSc()}function close3(){Function_3_info.style.display="none";layer1.style.display="none"}function GeneratSc(){$.ajax({url:"http://10.118.35.182/tp5/public/admin/find/function_3.html",type:"POST",dataType:"json",data:{sc:F3_BJselectedText,},success:function(h){var a=document.getElementById("Function_3_tb");document.getElementById("Function_3_class").innerHTML=F3_BJselectedText;var d;for(d=0;d<h.length;d++){if((d+2)%2==0){var g=document.createElement("tr")}var f=document.createElement("td");var e=document.createElement("td");var c=document.createTextNode(d+1);var b=document.createTextNode(h[d]);f.appendChild(c);e.appendChild(b);g.appendChild(f);g.appendChild(e);a.appendChild(g);g.className="active"}}})};