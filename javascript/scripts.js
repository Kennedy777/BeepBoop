// Business logic
    var beepBoop = function(count){
     var resArray = [];
     debugger;

     for (var i = 0; i <=count; i++) {
      if (i.toString().includes('3')) {
        resArray.push("I'm sorry, Dave, I can't do that.");
      } else if(i.toString().includes("2")) {
        resArray.push("Boop!");
      } else if(i.toString().includes("1")){
          resArray.push("Beep!");
        } else {
          resArray.push(i);
        }
      }
      return resArray;
};

 // UI Logic
 $(document).ready(function(){
    $("#formHal").submit(function(event){
    event.preventDefault();
    var playerNum =parseInt($("input#playerNum").val());
    var num=beepBoop(playerNum);
  // $("#formHal")[0].reset();
  //    $("#computerSpeak").empty();
    input.forEach(function(num) {
      $("#computerSpeak").show();
      $("#output").append("<li>" +num + "</li>");
      });

    });
});



// Front end logic
// $(function() {
  // $("#pingPongForm").submit(function(event) {
    // event.preventDefault();
//     var userInput = parseInt($("input#userInput").val());
//     var input = pingPong(userInput);
//     // Empty method removes all existing children in the DOM, allowing user to enter a new number and see new results multiple times
//     $("#result").empty();
//     input.forEach(function(num) {
//       $("#result").append("<li>" + num + "</li>");
//     });
//     $("#result").fadeIn("slow");
//   });
// });
