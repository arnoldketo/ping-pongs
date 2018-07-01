// //business logic
// function config (){
//
//   for (var h=1; h<=100; h++){
//   if(userInput%3===0){
//     // $("#reply").append("<li>ping</li>")||$("#reply").append(h)
//      $("#reply").append( "<li>ping</li>")
//   } if (userInput%5===0) {
//     // $("#reply").append("<li>pong</li>")||$("#reply").append(h)
//     $("#reply").append( "<li>pong</li>")
//   } if (userInput%3&&5===0) {
//     // $("#reply").append("<li>pingpong</li>")||$("#reply").append(h)
//     $("#reply").append( "<li>pingpong</li>")
//   // } else {
//   //   // $("#reply").text("not a value")
//   //   $("#reply").append(output += "ping")
//   // }
//     }
//     $("#reply").text(h)
//   }
//
// }
//
//
//
// //UI logic
// $(document).ready(function() {
//   $("#replies-form").submit(function(event){
//     event.preventDefault();
//     var userInput = parseInt($("input#replies-Input").val());
//       // $("replies-Input").val("");
//     // var replies = $("replies-Input").val();
//         config(userInput);
//
//
// })

// })
//back-end logic
function config(h){
	//takes in an interger and integer as an argument and returns the below logical states
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
