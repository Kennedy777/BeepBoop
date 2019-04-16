// Business logic
    var beepBoop = function(count){
     var result = [];

     for (var i = 0; i <=count; i++) {
      if (i.toString().includes('3')) {
        result.push("I'm sorry, Dave, I can't do that.");
      } else if(i.toString().includes("2")) {
        result.push("Boop!");
      } else if(i.toString().includes("1")){
          resArray.push("Beep!");
        } else {
          result.push(i);
        }
      }
      return result;
};

 // UI Logic
 $(document).ready(function(){
    $("#formHal").click(function(event){
    event.preventDefault();
    var playerNum =parseInt($("input#playerNum").val());
    var input=beepBoop(playerNum);
   // $("#formHal")[0].reset();
     $("#result").empty();
    input.forEach(function() {
      // $("#result").append("<li>" + num + "</li>");
      });
     $("#result").show();
    });
  });
