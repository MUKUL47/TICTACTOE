//////////////////////////////////// 
var box=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var gameover=false;
var CompXO="",PlayerXO="";
var rand=0;
var lastPos = 0, validPos = -1, cc = -1, counter = 0; 
var Move = [];
var lastId = -1;
////////////////////////////////////      
function x(){ Reset(); CompXO="o.png",PlayerXO="x.png"; $("#status").html("You are "+PlayerXO.substring(0,1).toUpperCase()); }
function o(){ x(); }

$("#X").click(function(){ Reset(); x(); });

$("#O").click(function(){ Reset(); x(); });

$(".set1").click(function(){
	if( !gameover && box[this.id-1] == -1 ){
		lastId = this.id-1;	
	    AssignPos(); 
		$(this).attr("src",PlayerXO);	
		updateBox(this.id-1); 
		updateOpponentBox();
	}
	checkGameOver();
});

function AssignPos(){ if(PlayerXO == "") { x(); } }

function updateBox(ID){ box[ID] = 1;
		++counter;
		lastPos = ID;
		Move[ID].updateOwnedBy(1);
}

function updateOpponentBox(){
	var rand = Math.floor(Math.random() * 9 );

	if( counter >= 2 ) { //ADD CHILD IN LAST POSITION  //addToMoveClass(this.id-1, false);
		for(var i = 0; i < 9 ; i++) { 
			if( box[i] == -1 ) Move[lastPos].addChild(i,0);
		}
    rand = getPredictedPosition(Move[lastPos]);
    }

    else{ 	rand = getValidPosition(rand);    }

    console.log(rand)

	box[rand] = 0; 
	Move[rand].updateOwnedBy(0);
	rand += 1;
	$("#"+(rand)).attr("src",CompXO);
}

function checkGameOver(){
	var whoWon = someOneWon();
   if( (whoWon == 1 &&  PlayerXO == "x.png") || (whoWon == 0 &&  PlayerXO == "o.png") ){ $("#status").html("You Won "); gameover = true; }

else if( (whoWon == 0 &&  CompXO == "x.png") || (whoWon == 0 &&  CompXO == "o.png") ){ $("#status").html("You Lost "); gameover = true;	}
}

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
//
function addToMoveClass(id, playerOrNot){
	if( PlayerXO == "o.png" && playerOrNot)  Move[id].addChild(id,0);  else Move[id].addChild(id,1);
	if( CompXO   == "o.png" && !playerOrNot) Move[id].addChild(id,0);  else Move[id].addChild(id,1);
}
function getValidPosition(rand){
	if( box[rand] == -1 ) return rand;
	return getValidPosition(Math.floor(Math.random() * 9 ));
}
function getPredictedPosition(currentTree){

	var isValid = -1, found = false;

	var Children = currentTree.Children;

	//console.log(currentTree.getChildren())

	Children.forEach(function(i){
		if( checkPriority(parseInt( i.charAt(0))) && !found ) { isValid = parseInt(i.charAt(0)); found = true }
	})

	found = false;

	if(isValid == -1){
		Children.forEach(function(i){
		if( checkSecondPriority(parseInt(i.charAt(0))) && !found ) { isValid = parseInt(i.charAt(0)); found = true }
	})
	}

	return isValid;
}
function checkPriority(currentTreeMove){
	var Board = [];
	Move.forEach(function(i){
		Board.push(i.ownedBy)
	})
	Board[currentTreeMove] = 0; 

	if( Board[0] + Board[1] + Board[2] == 2) { return true;}
  else if( Board[3] + Board[4] + Board[5] == 2) { return true;}
  else if( Board[6] + Board[7] + Board[8] == 2) { return true;}
       
  else if( Board[0] + Board[3] + Board[6] == 2) { return true;}
  else if( Board[1] + Board[4] + Board[7] == 2) { return true;} 
  else if( Board[2] + Board[5] + Board[8] == 2) { return true;}
       
  else if( Board[0] + Board[4] + Board[8] == 2) { return true;}
  else if( Board[2] + Board[4] + Board[6] == 2) { return true;}

	return false
}
function checkSecondPriority(currentTreeMove){
	var Board = [];
	Move.forEach(function(i){
		Board.push(i.ownedBy)
	})
	Board[currentTreeMove] = 0; 

	   if(getSimi(Board[0],Board[1],Board[2])) return true
  else if(getSimi(Board[3],Board[4],Board[5])) return true
  else if(getSimi(Board[6],Board[7],Board[8])) return true
       
  else if(getSimi(Board[0],Board[3],Board[6])) return true
  else if(getSimi(Board[1],Board[4],Board[7])) return true
  else if(getSimi(Board[2],Board[5],Board[8])) return true
       
  else if(getSimi(Board[0],Board[4],Board[8])) return true
  else if(getSimi(Board[2],Board[4],Board[6])) return true

	return false
}
function getSimi(i, j, k){

		if(i == j && j == k && i == 0 ) return true;
        if(i == j && i == 0 && k == -1) return true;
        if(j == k && j == 0 && i == -1) return true;
        if(k == i && i == 0 && j == -1) return true;
         // GAMEOVER BREAK

        return false;
}

//
function Reset(){
box=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
gameover=false;
CompXO="",PlayerXO="";
rand=0;
lastPos = 0, validPos = -1, cc = -1, counter = 0; 
Move = [];
lastId = -1;
box=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
gameover = false;
$("#1").attr("src","empty.png"); $("#2").attr("src","empty.png"); $("#3").attr("src","empty.png");
$("#4").attr("src","empty.png"); $("#5").attr("src","empty.png"); $("#6").attr("src","empty.png");
$("#7").attr("src","empty.png"); $("#8").attr("src","empty.png"); $("#9").attr("src","empty.png");
$("#status").html("");
Move = [];
for(var i = 0; i < 9; i++) { Move.push(new Moves(i)); }
}
