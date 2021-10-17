
function initMap() {

  const fargo = { lat: 46.874005, lng: -96.780915 };
  var church = { lat: 46.882754, lng: -96.786830 }
  var recep = { lat: 46.817970, lng: -96.795700 }
  var hotel = { lat: 46.848800, lng: -96.763810 }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: fargo,
  });
    const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  var marker = new google.maps.Marker({
    position: church,
    map: map,
    icon: image,
    title: 'First Luthern Church'
  });
  var marker = new google.maps.Marker({
    position: recep,
    map: map,
    title: 'Reception'
  });
  var marker = new google.maps.Marker({
    position: hotel,
    map: map,
    title: 'Hotel'
  });    
}

$(function() {

  'use strict';

//RSVP link start
  $('.js-rsvp').click(function(e) {
    e.preventDefault();
    $('.js-menu-toggle1').trigger('click');
  })

  $('.js-menu-toggle1').click(function(e) {

  	var $this = $(this);

  	

  	if ( $('body').hasClass('show-rsvp') ) {
  		$('body').removeClass('show-rsvp');
  		$this.removeClass('active');
  	} else {
  		$('body').addClass('show-rsvp');	
  		$this.addClass('active');
  	}

  	e.preventDefault();

  });

  // click outisde offcanvas
  $(document).mouseup(function(e) {
    var container = $(".rsvp");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-rsvp') ) {
        $('body').removeClass('show-rsvp');
        $('body').find('.js-menu-toggle').removeClass('active');
      }
    }
  });
//sidebar link end

//location link start
  $('.js-loc').click(function(e) {
    e.preventDefault();
    $('.js-menu-toggle2').trigger('click');
  })

  $('.js-menu-toggle2').click(function(e) {

    var $this = $(this);

    

    if ( $('body').hasClass('show-loc') ) {
      $('body').removeClass('show-loc');
      $this.removeClass('active');
    } else {
      $('body').addClass('show-loc'); 
      $this.addClass('active');
    }

    e.preventDefault();

  });
  // click outisde offcanvas
  $(document).mouseup(function(e) {
    var container = $(".loc");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-loc') ) {
        $('body').removeClass('show-loc');
        $('body').find('.js-menu-toggle').removeClass('active');
      }
    }
  });
//sidebar link end
  
//Pictures link start
  $('.js-pics').click(function(e) {
    e.preventDefault();
    $('.js-menu-toggle3').trigger('click');
  })

  $('.js-menu-toggle3').click(function(e) {

    var $this = $(this);

    

    if ( $('body').hasClass('show-pics') ) {
      $('body').removeClass('show-pics');
      $this.removeClass('active');
    } else {
      $('body').addClass('show-pics'); 
      $this.addClass('active');
    }

    e.preventDefault();

  });
  // click outisde offcanvas
  $(document).mouseup(function(e) {
    var container = $(".pics");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-pics') ) {
        $('body').removeClass('show-pics');
        $('body').find('.js-menu-toggle').removeClass('active');
      }
    }
  });
//sidebar link end
});

$(function(){
  var btn = $(".slider__btn");
  
  btn.on("click",function(){
    $(".slider__item").first().clone().appendTo(".slider");
    $(".slider__image").first().css({transform: "rotateX(-180deg)", opacity: 0});
    setTimeout(function(){
      $(".slider__item").first().remove();
    },200);
  });
});