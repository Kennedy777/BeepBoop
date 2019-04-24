// Business logic

     var userResult = [];

    var beepBoop = function(number) {
      if (number.toString().includes(3)==true) {
         return "I'm sorry, Dave, I'm afraid I can't do that.";
       } else if (number.toString().includes(2)==true) {
         return "Boop!";
       } else if (number.toString().includes(1)==true) {
         return "Beep!";
       } else {
       return number.toString();
        //  return " " + number.toString();
        };
     };
   
 // UI Logic
 $(document).ready(function(){
    $("#formHal").submit(function(event){
     event.preventDefault();
     $("#resultNum").show();
     
     var originalInput=$("#userInput").val();
     for (var i=0; i<=originalInput; i++) {
      userResult.push(beepBoop(i));
     };

     $("#result").text(userResult);
     });
  });

