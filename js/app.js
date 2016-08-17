$(document).ready(function(){

	function drawBoard(queens){
		
		for (var i = 0; i < size; i ++){
			var line = "";
			for (var j = 0; j < size; j++){
				if (i%2 === j%2){
					line += "<div class='black'>";
					if (j === queens[i].x){
						line += "<img src='http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_queen_T.png'>";
					} 	
					line += "</div>";	
				} else {
					line += "<div class='white'>";
					if (j === queens[i].x){
						line += "<img src='http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_queen_T.png'>";
					}
					line += "</div>";
				}
			}
			 $('.start').append("<div class='line'>"+line+"</div>");
		}
	};
	drawBoard(solution);

});