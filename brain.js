var box=[false,false,false,false,false,false,false,false,false];
var comprandpick;
var gameover=false;
var counter=0;
function x(){
reset();
document.getElementById("status").innerHTML="YOU ARE X";
document.getElementById("1").addEventListener("click",function(){

	
if(box[0]==false && gameover==false){
	box[0]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","o.png");	
	counter+=2;
	document.getElementById("1").setAttribute("src","x.png");
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}
	if(checkifwin(box)=="draw" && counter==9){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("2").addEventListener("click",function(){
if(box[1]==false && gameover==false){
	box[1]=true;
	
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	counter+=2;
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("2").setAttribute("src","x.png");
		if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("3").addEventListener("click",function(){
if(box[2]==false && gameover==false){
	box[2]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	counter+=2;
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("3").setAttribute("src","x.png");
		if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("4").addEventListener("click",function(){
if(box[3]==false && gameover==false){
	box[3]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	counter+=2;
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("4").setAttribute("src","x.png");
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("5").addEventListener("click",function(){
if(box[4]==false && gameover==false){
	box[4]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("5").setAttribute("src","x.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("6").addEventListener("click",function(){
if(box[5]==false && gameover==false){
	box[5]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("6").setAttribute("src","x.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("7").addEventListener("click",function(){
if(box[6]==false && gameover==false){
	box[6]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("7").setAttribute("src","x.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("8").addEventListener("click",function(){
if(box[7]==false && gameover==false){
	box[7]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("8").setAttribute("src","x.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("9").addEventListener("click",function(){
if(box[8]==false && gameover==false){
	box[8]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","o.png");
	document.getElementById("9").setAttribute("src","x.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="YOU WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="COMPUTER WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});


}
function o(){
reset();
document.getElementById("status").innerHTML="YOU ARE O";
document.getElementById("1").addEventListener("click",function(){
if(box[0]==false && gameover==false){
	box[0]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("1").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}

}
});
document.getElementById("2").addEventListener("click",function(){
if(box[1]==false){
	box[1]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("2").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("3").addEventListener("click",function(){
if(box[2]==false){	box[2]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("3").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("4").addEventListener("click",function(){
if(box[3]==false){	box[3]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("4").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}

}
});
document.getElementById("5").addEventListener("click",function(){
if(box[4]==false){	box[4]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("5").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("6").addEventListener("click",function(){
if(box[5]==false){
	box[5]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("6").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("7").addEventListener("click",function(){
if(box[6]==false){
	box[6]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("7").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("8").addEventListener("click",function(){
if(box[7]==false){
	box[7]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("8").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}
}
});
document.getElementById("9").addEventListener("click",function(){
if(box[8]==false){	box[8]=true;
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	while(box[comprandpick]==true){
	comprandpick=Math.floor(Math.random() * (9 - 0) + 0);
	}
	document.getElementById(comprandpick+1).setAttribute("src","x.png");
	document.getElementById("9").setAttribute("src","o.png");
	counter+=2;
	if(checkifwin(box)=="x"){
		document.getElementById("status").innerHTML="COMPUTER WON";
		gameover=true;
	}
	else if(checkifwin(box)=="o"){
			document.getElementById("status").innerHTML="YOU WON";
			gameover=true;
	}else if(checkifwin(box)=="draw" && counter>8){
			document.getElementById("status").innerHTML="ITS A DRAW";
			gameover=true;
	}

}
});


}
function reset(){
document.getElementById("status").innerHTML="";	
counter=0;
gameover=false;
for(var i=0;i<box.length;i++){
	box[i]=false;
}
for(var i=1;i<=9;i++){
document.getElementById(i).setAttribute("src","empty.png");
}

}
function checkifwin(box){


if(document.getElementById("1").getAttribute("src")==document.getElementById("2").getAttribute("src")
	&& document.getElementById("2").getAttribute("src")==document.getElementById("3").getAttribute("src") && 
	document.getElementById("1").getAttribute("src")=="x.png"){
	return "x";
}
else if(document.getElementById("4").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("4").getAttribute("src")==document.getElementById("6").getAttribute("src") && 
	document.getElementById("4").getAttribute("src")=="x.png"){
	return "x";
}
else if(document.getElementById("7").getAttribute("src")==document.getElementById("8").getAttribute("src")
	&& document.getElementById("8").getAttribute("src")==document.getElementById("9").getAttribute("src") && 
	document.getElementById("7").getAttribute("src")=="x.png"){
	return "x";
}

else if(document.getElementById("1").getAttribute("src")==document.getElementById("4").getAttribute("src")
	&& document.getElementById("4").getAttribute("src")==document.getElementById("7").getAttribute("src") && 
	document.getElementById("1").getAttribute("src")=="x.png"){
	return "x";
}

else if(document.getElementById("2").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("5").getAttribute("src")==document.getElementById("8").getAttribute("src") && 
	document.getElementById("2").getAttribute("src")=="x.png"){
	return "x";
}
else if(document.getElementById("3").getAttribute("src")==document.getElementById("6").getAttribute("src")
	&& document.getElementById("6").getAttribute("src")==document.getElementById("9").getAttribute("src") && 
	document.getElementById("3").getAttribute("src")=="x.png"){
	return "x";
}
else if(document.getElementById("1").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("5").getAttribute("src")==document.getElementById("9").getAttribute("src") && 
	document.getElementById("1").getAttribute("src")=="x.png"){
	return "x";
}
else if(document.getElementById("3").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("5").getAttribute("src")==document.getElementById("7").getAttribute("src") && 
	document.getElementById("3").getAttribute("src")=="x.png"){
	return "x";
}
else if(document.getElementById("1").getAttribute("src")==document.getElementById("2").getAttribute("src")
	&& document.getElementById("2").getAttribute("src")==document.getElementById("3").getAttribute("src") && 
	document.getElementById("1").getAttribute("src")=="o.png"){
	return "o";
}
else if(document.getElementById("4").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("4").getAttribute("src")==document.getElementById("6").getAttribute("src") && 
	document.getElementById("4").getAttribute("src")=="o.png"){
	return "o";
}
else if(document.getElementById("7").getAttribute("src")==document.getElementById("8").getAttribute("src")
	&& document.getElementById("8").getAttribute("src")==document.getElementById("9").getAttribute("src") && 
	document.getElementById("7").getAttribute("src")=="o.png"){
	return "o";
}

else if(document.getElementById("1").getAttribute("src")==document.getElementById("4").getAttribute("src")
	&& document.getElementById("4").getAttribute("src")==document.getElementById("7").getAttribute("src") && 
	document.getElementById("1").getAttribute("src")=="o.png"){
	return "o";
}

else if(document.getElementById("2").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("5").getAttribute("src")==document.getElementById("8").getAttribute("src") && 
	document.getElementById("2").getAttribute("src")=="o.png"){
	return "o";
}
else if(document.getElementById("3").getAttribute("src")==document.getElementById("6").getAttribute("src")
	&& document.getElementById("6").getAttribute("src")==document.getElementById("9").getAttribute("src") && 
	document.getElementById("3").getAttribute("src")=="o.png"){
	return "o";
}
else if(document.getElementById("1").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("5").getAttribute("src")==document.getElementById("9").getAttribute("src") && 
	document.getElementById("1").getAttribute("src")=="x.png"){
	return "x";
}
else if(document.getElementById("3").getAttribute("src")==document.getElementById("5").getAttribute("src")
	&& document.getElementById("5").getAttribute("src")==document.getElementById("7").getAttribute("src") && 
	document.getElementById("3").getAttribute("src")=="o.png"){
	return "o";
}else{
	return "draw";
}

}