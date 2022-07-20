/* autocomplete */
$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
});



let date = () => {
  //alert("deneme")

  document.getElementById("date_id").innerHTML = new Date();
  //$('#date_id').html( `tarih: ${new Date()}`);

  //document.getElementById("date_id").innerText=new Date();
  //$('#date_id').text(new Date());

  //document.getElementById("date_id").style.backgroundColor="blue";
  //document.getElementById("date_id").style.color="white";
  // $("#date_id").css("background-color","blue").css("color","white")

  const cssObject = {
    "color": "red",
    "background-color": "black",
    "box-shadow": "1px 1px 3px 1px rgba(255,255,255,.8)",
    "margin-bottom": "3rem"
  }
  $("#date_id").css(cssObject);
  //autocomplete 
  //backtotop
}


/* login value and validation*/
$(function () {
  $("#btnSubmit").click(function () {
    let email, password;
    email = jQuery.trim($("#user_email").val());
    password = jQuery.trim($("#user_password").val());


    //validation  email
    if (email == "") {
      $("#validation_email").html("Email boş geçilemez...")
    } else if (regexEmail(email) == false) {
      $("#validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
    }

    //regex email
    function regexEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    //validation  password
    if (password == "") {
      $("#validation_password").html("password boş geçilemez...")
    } else if (regexPassword(password) == false) {
      $("#validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
    }

    //regex email
    function regexPassword(password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
      return regex.test(password);
    }
  })//onclick close
}); //document ready close

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(document).ready(function (){
  var count = 0;
 function myCount() {
 if (count > 86) {
   count=86;
 }
 $('.coffe').text(count);
 count ++;
  
}
setInterval(myCount,100);
        });

//////////////////////////////////////////////////
$(document).ready(function (){
  var count = 0;
 function myCount() {
 if (count > 250) {
   count=250;
 }
 $('.work').text(count);
 count ++;
  
}
setInterval(myCount,10);
        });
 ///////////////////////////
 $(document).ready(function (){
  var count = 0;
 function myCount() {
 if (count > 1300) {
   count=1300;
 }
 $('.code').text(count);
 count ++;
  
}
setInterval(myCount,10);
        });
//////////////////////////////////////////
$(document).ready(function (){
  var count = 0;
 function myCount() {
 if (count > 9) {
   count=9;
 }
 $('.project').text(count);
 count ++;
  
}
setInterval(myCount,100);
        });


//////////////////////////////////////////
function checkForm(){
  alert("Form temizlenecek");
  document.forms[0].reset();
 }

//////////////////////////////////////////
$(document).ready(function() {
  $("#basic-form").validate({
    rules: {
      name : {
        required: true,
        minlength: 3
      },
      
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        password: true,
        minlength: 6
      },
    },
    messages : {
      name: {
        minlength: "İsim en az 3 harfli olmalı"
      },
      
      email: {
        email: "Mail formatı: abc@domain.tld"
      },
      password: {
        email: "Şifre en az 5 karakter olmalı"
      },
      
    }
  });
});
//////////////
$(window).scroll(function() {
  if ($(this).scrollTop() >= 350) {
      $('#yukari').fadeIn(200);
  } else {
      $('#yukari').fadeOut(200);
  }
 });

// Tıklama
   $('#yukari').on('click', function() {
  $("html, body").animate({scrollTop: 0}, 1000);
  });