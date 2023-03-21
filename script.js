$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//Email
// const submitbtn = document.getElementById("submitbtn");

// submitbtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let name = document.getElementById("submitname").value;
//   let email = document.getElementById("submitemail").value;
//   let message = document.getElementById("submitmessage").value;
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "anshul.webdev@gmail.com",
//     Password: "2A8BF0EB28A1FC449DCE63DF894E8E294E18",
//     To: "anshul.webdev@gmail.com",
//     From: email,
//     Subject: "This is the subject",
//     Body: "Name: " + name + "<br>" + "Message: " + message,
//   }).then((message) => alert(message));
// });
