
//back-end logic
function config(h){
	if (h%3===0){
		return "ping"
		}
	else if(h%5===0){
		return "pong"
		}
	else if(h%15===0){
		return "pingpong"
		}
	else{
		return h
		}
}

//user interface
$(document).ready(function(){
	$("#replies-form").submit(function(event){
		event.preventDefault();
		$("ul#reply").empty();
		var userInput=parseInt($("input#replies-Input").val());
		for(var h=1; h<=userInput; h+=1){
			$("ul#reply").append("<li>"+config(h)+"</li>");
		}
	});
});
