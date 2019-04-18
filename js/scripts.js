// Business logic
  
     var userResult = [];
     function Numbers  = (originalInput){
        return/\d.test(originalInput);
     }

     function beepBoop(originalInput){
    
     for (var i = 0; i <=originalInput; i++) {
      if (i.toString().includes('3')) {
        userResult.push("I'm sorry, Dave, I can't do that.");
      } else if(i.toString().includes("2")) {
        userResult.push("Boop!");
      } else if(i.toString().includes("1")){
         userResult.push("Beep!");
        } else {
          userResult.push(i);
        }
     } return userResult
      console.log(userResult);
};

 // UI Logic
 $(document).ready(function(){
    $("#formHal").submit(function(event){
  
    var originalInput =parseInt($("input#playerNum").val());
    var isNumber=Numbers(originalInput);
    var initialOutput= beepBoop(originalInput)
   // $("#formHal")[0].reset();
  
   finalOutput=userResult.map(function(result){
     return "<li>" + result + "</li>"
   });

    if (isNumber==false){
      alert("I told you to only use numbers, Dave");
    } else if (originalInput<1){
      alert("Silly human. You need to use positive numbers.")
    } else {

     $("#result").append(finalOutput);
    input.forEach(function() {
      // $("#result").append("<li>" + num + "</li>");
      });
     $("#result").show();

     event.preventDefault();
    });
  });
