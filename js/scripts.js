$(document).ready(function() {
  $("#address").submit(function(event){
    var userNameInput = $("input#userName").val().toUpperCase();

    $("userName").val("");

    $(".userName").text(userNameInput);


    $("#letter").text($("#letter").text().toUpperCase());
    $("#letter").show();

    event.preventDefault();
  });
});
