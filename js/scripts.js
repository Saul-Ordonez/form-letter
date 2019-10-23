$(document).ready(function() {
  $("#address").submit(function(event){
    var userNameInput = $("input#userName").val();

    $("userName").val("");

    $(".userName").text(userNameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
