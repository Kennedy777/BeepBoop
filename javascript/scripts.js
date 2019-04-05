$(document).ready(function(){
  $("#formOne").submit(function(event) {
  event.preventDefault();

  var input = $("userNumber").val();
   var Array1 ="" convertUserInput(inputNumber);
   var result = "";
    for (var i = 0; i <=input; i++) {
    result += Array1[i] + " ";
    }
$("#response").html(response);
  });
});
