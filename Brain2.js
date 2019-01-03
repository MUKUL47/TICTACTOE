var box=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var gameover=false;
var CompXO="",PlayerXO="";
var rand=0;
function x(){ CompXO="o.png",PlayerXO="x.png"; }
function o(){ CompXO="x.png",PlayerXO="o.png"; }


$("#1").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 
})

$("#2").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 

})

$("#3").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 

})

$("#4").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand =Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 

})

$("#5").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) );} else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 


})

$("#6").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 


})

$("#7").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 

})

$("#8").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 

})

$("#9").click(function(){
if(PlayerXO == "") if(Math.floor(Math.random() * 3 ) == 0) { o(); } else { x(); } $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase());
if( box[this.id-1] == -1 && !gameover) $(this).attr("src",PlayerXO); box[this.id-1]=0; //if(someOneWon()){ $("#status").html("YOU WON !!"); gameover=true; }

if(someOneWon() == 0){ $("#status").html("PLAYER WON !!"); gameover=true; } 
rand = Math.floor(Math.random() * (8) );
while(!gameover){ if(box[rand] > -1) { rand = Math.floor(Math.random() * (8) ); } else  box[rand]=1; console.log(rand); break; }
$("#"+(rand+1)).attr("src",CompXO);  
if(someOneWon() == 1) { $("#status").html("COMPUTER WON !!"); gameover=true; } 

})

function someOneWon(){
     if(box[0] == box[1] && box[0] == box[2] && box[0] == 0)	{ return 0; }  else if(box[3] == box[4] && box[3] == box[5] && box[3] == 0)	{ return 0; }
else if(box[6] == box[7] && box[7] == box[8] && box[6] == 0)	{ return 0; }  else if(box[0] == box[3] && box[3] == box[6] && box[0] == 0)	{ return 0; }
else if(box[1] == box[4] && box[4] == box[7] && box[1] == 0)	{ return 0; }  else if(box[2] == box[5] && box[5] == box[8] && box[2] == 0)	{ return 0; }
else if(box[0] == box[4] && box[4] == box[8] && box[0] == 0)	{ return 0; }

else if(box[0] == box[1] && box[0] == box[2] && box[0] == 1)	{ return 1; }  else if(box[3] == box[4] && box[3] == box[5] && box[3] == 1)	{ return 1; }
else if(box[6] == box[7] && box[7] == box[8] && box[6] == 1)	{ return 1; }  else if(box[0] == box[3] && box[3] == box[6] && box[0] == 1)	{ return 1; }
else if(box[1] == box[4] && box[4] == box[7] && box[1] == 1)	{ return 1; }  else if(box[2] == box[5] && box[5] == box[8] && box[2] == 1)	{ return 1; }
else if(box[0] == box[4] && box[4] == box[8] && box[0] == 1)	{ return 1; }
return -1;
}

function Reset(){
box=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
gameover=false;
var CompXO="",PlayerXO="";
$("#1").attr("src","empty.png"); $("#2").attr("src","empty.png"); $("#3").attr("src","empty.png");
$("#4").attr("src","empty.png"); $("#5").attr("src","empty.png"); $("#6").attr("src","empty.png");
$("#7").attr("src","empty.png"); $("#8").attr("src","empty.png"); $("#9").attr("src","empty.png");
$("#status").html("");
}