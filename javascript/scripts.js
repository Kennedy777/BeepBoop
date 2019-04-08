  $(document).ready(function(){
    $("#formHal").submit(function(event) {
    event.preventDefault();

    var input =$("#userNum").val();
    $("#formHal")[0].reset();
      $("#computerSpeak").text(goNum(input));
      $("#computerSpeak").show();
      });
    });
    function goNum(input){
     var Array1 = [];
        for (var i = 0; i <=input; i++) {
      var Array1 = i.toString().split('');
      if(Array1.includes("3")){
        Array1.push("I'm sorry, Dave, I can't do that.");
      } else if(Array1.includes("2")){
        Array1.push("Boop!");
      } else if)Array1.includes("1")){
        Array1.push("Beep!");
      } else {
        Array1.push(i);
      }
    }
      return Array1[Array1.length-1];
  );
