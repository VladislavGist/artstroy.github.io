
$(document).ready(function() {
 $(".fancyimage").fancybox({
  helpers : {
    title: { type: 'inside'}
  },
  afterLoad: function(){
    //this.title = this.title + ' ' + ;
    $("<div class='name11'>" + $(this.element).find('img').attr('alt')+ " </div>").prependTo($(".fancybox-skin"));
  }
 });
});

function ifOneItemgallery() {
  $(".galleryOurWork .wrap").each(function() {
    var $this = $(this);
    if($(this).find(">li\ ").length == 1) {
      $this.css({"box-shadow":"none"});
      $("section.galleryOurWork .wrap li").hover(
        function() {
          $(this).find("img").css({
            "position":"relative",
            "width":"100%",
            "top":"0",
            "left":"0"
          })
        }, function() {
          $(this).find("img").css({
            "position":"relative",
            "width":"100%",
            "top":"0",
            "left":"0"
          })
        }
      )
    }
  })
}

ifOneItemgallery();

function footer(){
  var minheight = (typeof window.outerHeight != 'undefined')?Math.max(window.outerHeight, $(window).height()):$(window).height();
  $("body").css({"padding-bottom": $("footer").outerHeight() + parseInt($("footer").css("margin-top")), "min-height": $(window).outerHeight});
}
//resize
$(window).resize(function(){
  footer(); 
});

$(window).ready(function(){
  footer(); 
});

$(".galleryTab#tabs ul.nav.nav-tabs li:first").addClass("active");
$(".galleryTab#tabs .tab-content .tab-pane:first").addClass("active");

$(".anchor").click(function(event) {
  event.preventDefault();
  var el = $(this).attr("href");
  $("body, html").animate({
    scrollTop: $(el).offset().top
  }, 800);
  return false;
})

$(".lineWrap > div:nth-child(1)").delay(2500).animate({"width":"60px"},500);

$(".lineWrap > div:nth-child(2)").delay(2000).animate({"height":"210px"},500);

$(".lineWrap > div:nth-child(3)").delay(1500).animate({"width":"790px"},500);

$(".lineWrap > div:nth-child(4)").delay(1000).animate({"height":"210px"},500);

$(".lineWrap > div:nth-child(5)").delay(500).animate({"width":"60px"},500);

$(".title h1").delay(3000).animate({"opacity":"1"});

var myMap, 
    myPlacemark;

function init() { 
  myMap = new ymaps.Map("map", {
      center: [52.61697075858002,39.562680974868755],
      zoom: 16
  }); 
  
  myPlacemark = new ymaps.Placemark([52.61697075858002,39.562680974868755], {
      hintContent: 'г.Липецк ул.Космонавтов, 42'
  });
  
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

$("#footerForm").validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true
    },
    text: {
      required: true
    }
  },
  messages: {
    email: {
      required: "Заполните поле",
      email: "Некорректный email"
    },
    phone: {
      required: "Заполните поле"
    },
    text: {
      required: "Заполните поле"
    }
  }
})

$("#messBl2").validate({
  rules: {
    mesName: {
      required: true
    },
    text: {
      required: true
    }
  },
  messages: {
    mesName: {
      required: "Заполните поле"
    },
    text: {
      required: "Заполните поле"
    }
  }
})

$("#messBl").validate({
  rules: {
    mesName: {
      required: true
    },
    text: {
      required: true
    }
  },
  messages: {
    mesName: {
      required: "Заполните поле"
    },
    text: {
      required: "Заполните поле"
    }
  }
})

$("#saleBlc").validate({
  rules: {
    phoneMask: {
      required: true
    }
  },
  messages: {
    phoneMask: {
      required: "Заполните поле"
    }
  }
})

$("#portf").validate({
  rules: {
    phoneMask: {
      required: true
    }
  },
  messages: {
    phoneMask: {
      required: "Заполните поле"
    }
  }
})

$("#vis").validate({
  rules: {
    phoneMask: {
      required: true
    }
  },
  messages: {
    phoneMask: {
      required: "Заполните поле"
    }
  }
})

$("input[name='phoneMask']").mask("+7 (999) - 999 - 99 - 99");
$("#formPhone").mask("+7 (999) - 999 - 99 - 99");

function adaptiveMap() {
  var w = $(window).width();

  if(w < 768) {
    $("#map").css({"width":"100%"})
    $("#map").addClass("low768GalleryAdaptive");
  } else {
    $("#map").css({"width":"950px","height":"1027px","top":"-96px"});
    $("#map").removeClass("low768GalleryAdaptive");
  }
}

function adaptiveSliderPortfolio() {

  $(".slick-slider-portfolio li a").click(function() {
    if( $(".slider-portf-2 .slick-slide").length <= 3) {
      var w = 0, bigW = $(".slick-slider-portfolio .slick-slide");

      bigW.map(function() {
        if($(this).width() > w) {
          w = $(this).width();
        }
      })

      $(bigW).width(w);

      $(".slider-portf-2 .slick-track").width("101%");
      $(".slider-portf-1 .slick-track").width("101%");
    }
  })
}
adaptiveSliderPortfolio();



$(".slick-slider-rewiews").slick({
  dots: true,
  autoplay: true
});

$(".slider-portf-1").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

$(".slider-portf-2").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})


/* Перемещение кнопок внутрь рамки. Заработало, но не добавлялись классы .active нужным кнопкам*/
//$(".slick-dots").appendTo(".slick-track");
/*
var m = $(".slick-track .slick-active").index();*/

$(".nav.nav-tabs li").click(function() {
  $(".slick-list.draggable").css({"opacity":"0"});
  $(".tab-content li.slick-active button").trigger("click");
  setTimeout(function() {
    $(".slick-list.draggable").animate({"opacity":"1"}, 100);
  }, 300);
})

$(".allRevItems .wrapTextContRew:has('.wrapperImg')").prev(".revName").css({"margin-bottom":"100px"});

$(".linkItem a").click(function() {
  $(".linkItem a").removeClass("activeLinks");
  $(this).addClass("activeLinks");
  $(".linkItem a").parent().removeClass("activeBorder");
  $(this).parent().addClass("activeBorder");
})

$('#tabs ul.nav.nav-tabs li > a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(".galleryTab li a").click(function() {
  $(this).addClass("activeLink");
})

$(".links .linkItem a").click(function() {
  $(this).next().prop("checked", true);
})

function parallax() {
  if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(window).stellar();
  }
}

$(".galleryTab .nav-tabs a").hover(function() {
  var $this = $(this);
    if($this.height() > 17){
      setTimeout(function(){
        $this.addClass("lineWidth");
      }, 400)
    }
  },
  function(){
    $(".galleryTab .nav-tabs a").removeClass("lineWidth");
  }
)

$(function() {
	ymaps.ready(init);
  parallax()
  new WOW().init();
  $(window).on({
    resize: function() {
      adaptiveMap();
    }
  })
  $(document).ready(function() {
    adaptiveMap();
  })
})