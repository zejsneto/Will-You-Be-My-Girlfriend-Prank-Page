count = 0;

$("#change").click(function() {
    $("#change").html("<a onclick='gotIt()'> Yes </a>");   
    $("#move").show();
    if (count == 1) {
        gotIt();
    }
    count = 1;
  });

  function gotIt() {
    alert("Love u!");
}
  
  $("#move").hover(function() {
    change();
  });
  
  function change(){
      var i = Math.floor(Math.random()*50)+1;
      var j = Math.floor(Math.random()*50)+1;
      $("#move").css({top: j+'%',left: i+'%'});
  }
