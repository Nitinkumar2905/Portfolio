$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });

    // $(".myDiv").click(function(){
    //     $(this).toggleClass("mobile-menu")
    // })
  });

  let x = document.querySelector(".MyDiv");
  function myFunction() {
    x.classList.toggle("mobile-menu");
  //   x.classList.toggle("answer")
  
    }