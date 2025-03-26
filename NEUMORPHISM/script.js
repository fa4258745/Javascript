// <---------------------     COMPONENTS     -------------------------->


// <-------------------------------------------->

$(document).ready(function () {
$(".show").on("mouseenter", function() {
    $(".nav-container-component").slideDown(100);
})

$(".nav-container-component").on("mouseleave", function () {
    $(".nav-container-component").hide("slow");
  });

})
// <-------------------------------------------->

// $(document).ready(function () {
// $(".show").on("mouseenter", function() {
//     $(".nav-container-component").show(200);
// })

// $(".nav-container-component").on("mouseleave", function () {
//     $(".nav-container-component").hide(200);
//   });

// })
// <---------------------       PAGES       -------------------------->
// <---------------------       PAGES       -------------------------->
$(document).ready(function () {
  $(".show-page").on("mouseenter", function() {
    $(".page-content").show(200);
  })
  
  $(".page-content").on("mouseleave", function () {
    $(".page-content").hide(200);
  });

  })

  // <---------------------       SUPPORT       -------------------------->

  $(document).ready(function () {
    $(".para-support ").on("mouseenter", function() {
      $(".box-support").slideDown(200);
    })
    
    $(".para-support").on("mouseleave", function () {
      $(".box-support").hide(200);
    });
  
    })
