
 function tampilkansemuaheroes() {
$.getJSON("Js/data.json", function (result) {
  // console.log(result);
  
  $.each(result, function (i, data) {
    $("#daftar-menu").append(
      '<div class="col text-white" data-aos="fade-up"data-aos-duration="500"><div class="card h-100" style="background-color: rgb(85, 85, 100, 0.5);"><img src="' +
        data.img +
        '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" style="font-family: Luxurious Roman, cursive;"><b><h2><img src="' +
        data.icon +
        ' class="card" alt="..." width="40" height="40" > &nbsp;' +
        data.localized_name +
        '</h2></b></h5><p class="card-text"> <b>Roles :</b> <br> ' +
        data.roles +
        "</p></div></div></div>"
      );
    });
  });
}

$.getJSON("Js/data.json", function (result) {
$.each(result, function (i, data) {
    $("#stats").append(
      '<div class="row row row-cols-12  border justify-content-center" data-aos="fade-up"data-aos-duration="7000" id="stats"><div class="col border" ><img src="' +
        data.icon +
        '" alt=""></div><div class="col border"><h3 class="text-dark" style="Font-size: 15px; ></h3></div><div class="col border"> ' +
        data.localized_name +
        '</div><div class="col border">' +
        data.attack_range +
        '</div><div class="col border">' +
        data.projectile_speed +
        '</div><div class="col border">' +
        data.attack_rate +
        '</div><div class="col border">' +
        data.base_health_regen +
        '</div><div class="col border">' +
        data.intelligence_gain +
        '</div><div class="col border">' +
        data.primary_attr +
        '</div><div class="col border">' +
        data.attack_type +
        '</div><div class="col border">' +
        data.base_intelligence +
        '</div><div class="col border">' +
        data.base_attack_max +
        '</div><div class="col border">' +
        data.base_attack_min +
        "</div></div></div>"
    );
  });
});
tampilkansemuaheroes();

$(document).ready(function(){
  $("#nl1").click(function(){
    $("#nl1").css({"color" : "whitesmoke"})
    $("#nl1").css({"background-color" : "#000000"})
    $("#nl2").css({"color" : "white"})
    $("#nl2").css({"background-color" : "#212529"})
    $("#nl3").css({"color" : "black"})
    $("#nl3").css({"background-color" : "white"})  
    $("#nl4").css({"color" : "black"})
    $("#nl4").css({"background-color" : "white"})    
  })

  $("#nl2").click(function(){
    $("#nl2").css({"color" : "whitesmoke"})
    $("#nl2").css({"background-color" : "#000000"})
    $("#nl1").css({"color" : "white"})
    $("#nl1").css({"background-color" : "#212529"})
    $("#nl3").css({"color" : "black"})
    $("#nl3").css({"background-color" : "white"})  
    $("#nl4").css({"color" : "black"})
    $("#nl4").css({"background-color" : "white"})  
})

  $("#nl3").click(function(){
      $("#nl3").css({"color" : "whitesmoke"})
      $("#nl3").css({"background-color" : "#373b40"})
      $("#nl1").css({"color" : "white"})
      $("#nl1").css({"background-color" : "#212529"})
      $("#nl2").css({"color" : "white"})
      $("#nl2").css({"background-color" : "#212529"})
      $("#nl4").css({"color" : "black"})
      $("#nl4").css({"background-color" : "white"})  
  })

  $("#nl4").click(function(){
    $("#nl4").css({"color" : "whitesmoke"})
    $("#nl4").css({"background-color" : "#373b40"})
    $("#nl1").css({"color" : "white"})
    $("#nl1").css({"background-color" : "#212529"})
    $("#nl2").css({"color" : "white"})
    $("#nl2").css({"background-color" : "#212529"})
    $("#nl3").css({"color" : "black"})
    $("#nl3").css({"background-color" : "white"})  
  })

})

$(document).ready(function(){
$(".filter").click(function(){
  $('.filter').removeClass('classfilter');
  $(this).addClass('classfilter');

    let kategori = $(this).html();
    $('.hasatu').html(kategori)
    // console.log(kategori);
    $('.hasatu').addClass('hasatu');

    if (kategori == "ALL Heroes") {
      $('#daftar-menu').html('');
      tampilkansemuaheroes();
      return
    }

    $.getJSON("Js/data.json", function (result) {
      var menu = result.roles;
      var content = '';
      // console.log(menu);

      $.each(result, function (i, data) {
        if (data.primary_attr == kategori.toLowerCase()) {
          content += '<div class="col text-white" data-aos="fade-up"data-aos-duration="500"><div class="card h-100" style="background-color: rgb(85, 85, 100, 0.5);"><img src="' +
          data.img +
          '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title" style="font-family: Luxurious Roman, cursive;"><b><h2><img src="' +
          data.icon +
          ' class="card" alt="..." width="40" height="40" > &nbsp;' +
          data.localized_name +
          '</h2></b></h5><p class="card-text"> <b>Roles :</b> <br> ' +
          data.roles +
          "</p></div></div></div>";
        }
     
      })
      // console.log(content);
      $('#daftar-menu').html(content);
      });
  });

})
