$(document).ready(function () {
  // headroom Plugin
  var myElement = document.querySelector(".headroom");
  var headroom = new Headroom(myElement);
  headroom.init();

  // Recent Article slider
  $(".blog-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "cubic-bezier(.19,1,.22,1)",
    dots: false,
    arrows: true,
    swipeToSlide: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // cssEase: "cubic-bezier(0.36, 0.03, 0, 0.91)",
    dots: true,
    arrows: false,
    swipeToSlide: true,
    centerMode: true,
    autoplay: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  // Match height plugin
  $(".blog-slider-item").matchHeight({
    byRow: 0,
  });

  // counter up js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".blog-slider-item")
    .on("mousedown", function () {
      $(this).css("cursor", "grabbing");
    })
    .on("mouseup", function () {
      $(this).css("cursor", "grab");
    });

  // Button tilt
  // $(".btn").tilt({
  //   scale: 1.1,
  // });
  $(document).on("mousemove mouseenter", function (e) {
    const pointer = $(".pointer");
    const follower = $(".follower");
    TweenMax.to(pointer, 0.8, {
      left: e.clientX,
      top: e.clientY,
      ease: Expo.easeOut,
    });
    TweenMax.to(follower, 1.5, {
      left: e.clientX,
      top: e.clientY,
      ease: Expo.easeOut,
    });
  });

  // Mouse follower Reverted
  $(".reverted").on("mouseenter mouseleave", (e) => {
    if (e.type == "mouseenter") {
      $(".follower-wrapper").addClass("revert");
    } else {
      $(".follower-wrapper").removeClass("revert");
    }
  });

  // Mouse follower cursor change
  $(".show-case-item").on("mouseenter mouseleave", (e) => {
    if (e.type == "mouseenter") {
      $(".follower-wrapper").addClass("arrow");
    } else {
      $(".follower-wrapper").removeClass("arrow");
    }
  });
});

$(window).on("scroll", function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $(".main-navigation").addClass("nav-bg");
  } else {
    $(".main-navigation").removeClass("nav-bg");
  }
  dh = $(document).height();
  wh = $(window).height();
  scrollPercentage = (windscroll / (dh - wh)) * 100;
  $(".site-progressbar").css("height", scrollPercentage + "%");
});
