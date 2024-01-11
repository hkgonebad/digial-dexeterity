//********************
//Load Function
//********************
$(window).on("load", function () {
  $(".contentScroll").mCustomScrollbar();

  //Pre Loader
  $("#preloader")
    .delay(350)
    .fadeOut(function () {
      $("body").delay(350).css({ overflow: "visible" });
    });
});

// Function to update the loginForm height based on loginSlider
function updateLoginFormHeight() {
	if ($('.loginSlider').length > 0) {
		var lsHeight = $('.loginSlider .item').height();
		$('.loginForm').css('height', lsHeight + 'px');
	} else {
		// If loginSlider is hidden, set loginForm height to 'auto'
		$('.loginForm').css('height', 'auto');
	}
}

// Initial call to set the height
updateLoginFormHeight();

// Function to handle window resize
function handleResize() {
// Call the function to update the loginForm height on resize
updateLoginFormHeight();
}

// Attach the resize event handler
$(window).on('resize', handleResize);

//********************
//Ready Function
//********************
$(document).ready(function () {

	//////////////////////////////////////
	// Login
	//////////////////////////////////////
	if ($('.loginSlider').length > 0) {

		$('.loginSlider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			autoplayDuration: 3000,
			arrows: false,
			// prevArrow: $('.prevMs'),
			// nextArrow: $('.nextMs'),
		});
	}

	// Get references to the password input and the toggle icon
    var passwordInput = $("#password");
    var toggleIcon = $("#togglePassword");

    // Function to toggle the password visibility
    function togglePasswordVisibility() {
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            toggleIcon.removeClass("fa-eye");
            toggleIcon.addClass("fa-eye-slash");
        } else {
            passwordInput.attr("type", "password");
            toggleIcon.removeClass("fa-eye-slash");
            toggleIcon.addClass("fa-eye");
        }
    }

    // Toggle password visibility when clicking the icon
    toggleIcon.on("click", function() {
        togglePasswordVisibility();
    });


	//////////////////////////////////////
	//SideNav Dropdown
	/////////////////////////////////////

	$(".side-nav .has-dropdown > a").on("click", function (e) {
		$(this).next(".sub-menu").slideToggle();

		e.preventDefault();
	});

	//********************
	// Nav
	const navUrl = "nav.html";
	$("#nav").load(navUrl, function () {
		// Active
		const currentUrl = window.location.href;
		$(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
		if (this.href === currentUrl) {
			$(this).addClass("active");
		}
		});
	});

  	// Aside
	const asideUrl = "aside.html";
	$("#aside").load(asideUrl, function () {});


	// HomeSlider
	if ($('.homeSlider').length > 0) {

		$('.homeSlider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			autoplayDuration: 3000,
			arrows: false,
			// prevArrow: $('.prevMs'),
			// nextArrow: $('.nextMs'),
		});
	}

	// Chart Carousel
	// Services Slide
    if ($('.chartCarousel').length > 0) {

        $('.chartCarousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplayDuration: 2500,
			prevArrow: $('.prevMs'),
			nextArrow: $('.nextMs'),

            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }},
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }},
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }}
            ]
        });
    }


	// Pie Chart
	$(".pie").each(function (index, element) {
		var num = +$(this).text();
		var chart =
		  '<svg viewBox="0 0 32 32"><circle class="circle" r="16" cx="16" cy="16" style="stroke-dasharray: 10 100" /></svg>';
		$(this).html(chart);
		$(this)
		  .find(".circle")
		  .css("stroke-dasharray", num + " 100");
		$(this).append("<h3>" + num + "%</h3>");
	});


	//********************
	//Carousel Slider
	//********************
	if ($(".owl-carousel").length > 0) {
		$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
			items: 1,
			nav: true,
			},
			600: {
			items: 2,
			nav: false,
			},
			1000: {
			items: 2,
			nav: true,
			loop: false,
			},
		},
		});
	}

});



$(function () {
  $("#toggleAccordions").on("click", function (e) {
    $("#accordion .collapse").toggleClass("show");
  });
});

$(document).ready(function () {
  var submitIcon = $(".searchbar-icon");
  var inputBox = $(".searchbar-input");
  var searchbar = $(".searchbar");
  var isOpen = false;
  submitIcon.click(function () {
    if (isOpen == false) {
      searchbar.addClass("searchbar-open");
      inputBox.focus();
      isOpen = true;
    } else {
      searchbar.removeClass("searchbar-open");
      inputBox.focusout();
      isOpen = false;
    }
  });
  submitIcon.mouseup(function () {
    return false;
  });
  searchbar.mouseup(function () {
    return false;
  });
  $(document).mouseup(function () {
    if (isOpen == true) {
      $(".searchbar-icon").css("display", "block");
      submitIcon.click();
    }
  });
});
function buttonUp() {
  var inputVal = $(".searchbar-input").val();
  inputVal = $.trim(inputVal).length;
  if (inputVal !== 0) {
    $(".searchbar-icon").css("display", "none");
  } else {
    $(".searchbar-input").val("");
    $(".searchbar-icon").css("display", "block");
  }
}

$(document).ready(function () {
  /* Get iframe src attribute value i.e. YouTube video url
		and store it in a variable */
  var url = $("#trainingVideo").attr("src");

  /* Assign empty url value to the iframe src attribute when
		modal hide, which stop the video playing */
  $("#myModal").on("hide.bs.modal", function () {
    $("#trainingVideo").attr("src", "");
  });

  /* Assign the initially stored url back to the iframe src
		attribute when modal is displayed again */
  $("#myModal").on("show.bs.modal", function () {
    $("#trainingVideo").attr("src", url);
  });
});

$(document).ready(function () {
  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password i").addClass("fa-eye-slash");
      $("#show_hide_password i").removeClass("fa-eye");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password i").removeClass("fa-eye-slash");
      $("#show_hide_password i").addClass("fa-eye");
    }
  });
});

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

// leftsidebar

var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "65px";
    document.getElementById("main").style.marginLeft = "65px";
    this.mini = true;
  }
}

/*
  $('body').on('mouseenter mouseleave','.dropdown-hover',function(e){
	let dropdown=$(e.target).closest('.dropdown-hover');
	 dropdown.addClass('show');
	 
   setTimeout(function(){
		 dropdown[dropdown.is(':hover')?'addClass':'removeClass']('show');
	 },300);
 });
*/

$(".panel-heading")
  .parent(".panel")
  .hover(
    function () {
      $(this).children(".collapse").collapse("show");
    },
    function () {
      $(this).children(".collapse").collapse("hide");
    }
  );

function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}

$(document).ready(function () {
  $(".slide-toggle").click(function () {
    $(".box").animate({
      width: "toggle",
    });
  });
});

$(document).ready(function () {
  $(".mob-arrow").click(function () {
    $(".box-link-mob").slideToggle();
  });
});

$(document).ready(function () {
  var itemsMainDiv = ".MultiCarousel";
  var itemsDiv = ".MultiCarousel-inner";
  var itemWidth = "";

  $(".leftLst, .rightLst").click(function () {
    var condition = $(this).hasClass("leftLst");
    if (condition) click(0, this);
    else click(1, this);
  });

  ResCarouselSize();

  $(window).resize(function () {
    ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
    var incno = 0;
    var dataItems = "data-items";
    var itemClass = ".item";
    var id = 0;
    var btnParentSb = "";
    var itemsSplit = "8";
    var sampwidth = $(itemsMainDiv).width();
    var bodyWidth = $("body").width();
    $(itemsDiv).each(function () {
      id = id + 1;
      var itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(",");
      $(this)
        .parent()
        .attr("id", "MultiCarousel" + id);

      if (bodyWidth >= 1200) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 992) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else if (bodyWidth >= 768) {
        incno = itemsSplit[1];
        itemWidth = sampwidth / incno;
      } else {
        incno = itemsSplit[0];
        itemWidth = sampwidth / incno;
      }
      $(this).css({
        transform: "translateX(0px)",
        width: itemWidth * itemNumbers,
      });
      $(this)
        .find(itemClass)
        .each(function () {
          $(this).outerWidth(itemWidth);
        });

      $(".leftLst").addClass("over");
      $(".rightLst").removeClass("over");
    });
  }

  //this function used to move the items
  function ResCarousel(e, el, s) {
    var leftBtn = ".leftLst";
    var rightBtn = ".rightLst";
    var translateXval = "";
    var divStyle = $(el + " " + itemsDiv).css("transform");
    var values = divStyle.match(/-?[\d\.]+/g);
    var xds = Math.abs(values[4]);
    if (e == 0) {
      translateXval = parseInt(xds) - parseInt(itemWidth * s);
      $(el + " " + rightBtn).removeClass("over");

      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(el + " " + leftBtn).addClass("over");
      }
    } else if (e == 1) {
      var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * s);
      $(el + " " + leftBtn).removeClass("over");

      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(el + " " + rightBtn).addClass("over");
      }
    }
    $(el + " " + itemsDiv).css(
      "transform",
      "translateX(" + -translateXval + "px)"
    );
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
    var Parent = "#" + $(ee).parent().attr("id");
    var slide = $(Parent).attr("data-slide");
    ResCarousel(ell, Parent, slide);
  }
});



$(document).ready(function () {
  /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
  var url = $("#cartoonVideo").attr("src");

  /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
  $("#myModal").on("hide.bs.modal", function () {
    $("#cartoonVideo").attr("src", "");
  });

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
  $("#myModal").on("show.bs.modal", function () {
    $("#cartoonVideo").attr("src", url);
  });
});

var delay = 500;
$(".progress-bar").each(function (i) {
  $(this)
    .delay(delay * i)
    .animate({ width: $(this).attr("aria-valuenow") + "%" }, delay);

  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: delay,
        easing: "swing",
      }
    );
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
  $('[data-toggle="tooltip2"]').tooltip();
});

$(document).on("click", ".listgrid", function () {
  var show = $(this).data("show");
  $(show).removeClass("hide").siblings().addClass("hide");
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(".slide-toggle").on("click", function () {
  $(this).toggleClass("rotatearrow");
});

$(document).ready(function () {
  if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function (e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i];
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
          var file = e.target;
          $(
            '<span class="pip">' +
              '<img class="imageThumb" src="' +
              e.target.result +
              '" title="' +
              file.name +
              '"/>' +
              "</span>"
          ).insertBefore("#files");
        };
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support to File API");
  }
});
