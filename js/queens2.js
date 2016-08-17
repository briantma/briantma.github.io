var size = parseInt(prompt("Enter Board Size:"));
var queens = [];
var x = 0;
var y = 0;

function placeQ (x, y, queens){
	if (y == size){
		return queens;
	}
	if(check(x, y, queens)){
		var oldQ = [];
		if (queens.length != undefined){
			oldQ = queens.slice();
		}  	
		queens.push({"x": x, "y":y});
		if (x == size-1){
			return placeQ(0,y+1,queens);
		}	
		return placeQ (0, y+1, queens) || placeQ(x+1, y, oldQ);
	} else {
		if (x == size-1){
			return null;
		} else {
			return placeQ(x+1, y, queens);
		}
	}			
}

function check(x, y, queens){
	if (queens.length == undefined){
		return true;
	} else {
		for (var i = 0; i < queens.length; i++){
			if (queens[i]["x"] == x || y - queens[i]["y"] == Math.abs(queens[i]["x"] - x)){
			 	return false;
			}
		}
	}
	return true; 
}

var solution = placeQ(x,y,queens);







