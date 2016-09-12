$(window).on('load resize', function() {
    "use strict";
/*====================================
Page loader
======================================*/
$(".loader").fadeOut("slow");

/*====================================
Masonry Blog
======================================*/
$('.blog-posts-content').masonry({
itemSelector: '.masonry'
});

/*==============================
Portfolio filter
==============================*/ 
var $container = $('.portfolio-container')
$container.isotope({
layoutMode: 'masonry',
transitionDuration: '.8s',
hiddenStyle: {
opacity: 0,
transform: 'perspective(100em) scale(0.2) rotateY(180deg)'
},
visibleStyle: {
opacity: 1,
transform: 'perspective(100em) scale(1) rotateY(0)'
},
masonry: {
columnWidth: '.portfolio-item'
}
});
$('.portfolio .filters a').on("click", function(){
$('.select-filter').removeClass('select-filter');
$(this).parent('li').addClass('select-filter');
var selector = $(this).attr('data-filter');
$container.isotope({ filter: selector });
return false;
});
});


jQuery(document).ready(function() {
"use strict";

/*====================================
Revolution Slider
======================================*/
jQuery('.tp-banner').show().revolution(
{
dottedOverlay:"none",
delay:9000,
startwidth:1170,
startheight:670,
hideThumbs:200,

thumbWidth:100,
thumbHeight:50,
thumbAmount:5,

navigationType:"none",
navigationArrows:"solo",
navigationStyle:"preview4",

touch:{
touchenabled:"on",
swipe_threshold: 75,
swipe_min_touches: 1,
swipe_direction: "horizontal",
drag_block_vertical: false
},
mouseScrollNavigation:"off",
onHoverStop:"on",

parallax:"mouse",
parallaxBgFreeze:"on",
parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

keyboardNavigation:"off",

navigationHAlign:"center",
navigationVAlign:"bottom",
navigationHOffset:0,
navigationVOffset:20,

soloArrowLeftHalign:"left",
soloArrowLeftValign:"center",
soloArrowLeftHOffset:20,
soloArrowLeftVOffset:0,
soloArrowRightHalign:"right",
soloArrowRightValign:"center",
soloArrowRightHOffset:20,
soloArrowRightVOffset:0,

shadow:0,
fullWidth:"on",
fullScreen:"on",
spinner:"spinner4",
stopLoop:"off",
stopAfterLoops:-1,
stopAtSlide:-1,
shuffle:"off",
autoHeight:"off",
forceFullWidth:"off",
hideThumbsOnMobile:"off",
hideNavDelayOnMobile:1500,
hideBulletsOnMobile:"off",
hideArrowsOnMobile:"off",
hideThumbsUnderResolution:0,

hideSliderAtLimit:0,
hideCaptionAtLimit:0,
hideAllCaptionAtLilmit:0,
startWithSlide:0,
videoJsPath:"rs-plugin/videojs/",
fullScreenOffsetContainer: ""
});

/*====================================
Center menu
======================================*/
var total_menu_items = $('#header.type1 .primary_menu > ul > li').length;  //Get the count of the all menu items
var half_position_even = total_menu_items / 2;   //If the count is even, just directly divide by 2
var half_position_odd = (total_menu_items - 1) / 2;   //If the count is odd, just adding 1 in order to make it to be an even, then divide by 2
var logo_html = '<li class="logo"><a href="index.html"><img src="images/logo.png" alt="mine" class="img-responsive mine-logo"/></a></li>'; //LOGO HTML
var ex = /^\d+$/;
if (ex.test(total_menu_items / 2)) {
$('#header.type1 .primary_menu > ul > li:nth-child(' + half_position_even + ')').after(logo_html);
} else {
$('#header.type1 .primary_menu > ul > li:nth-child(' + half_position_odd + ')').after(logo_html);
}

/*====================================
Add class on menu type 4
======================================*/
jQuery('#header.type4').parent('body').addClass("body-wrap");

/*====================================
Mobile Menu
======================================*/
jQuery('header').append('<div class="container relative"><a href="javascript:void(0)" class="menu_toggler"><span></span><span></span><span></span></a><nav class="mobile_menu_wrapper"><ul class="mobile_menu"/></ul></nav></div>');
jQuery('.mobile_menu').html(jQuery('header').find('.main-menu').html());
jQuery('.mobile_menu_wrapper').hide();
jQuery('.menu_toggler').on("click", function(){
jQuery('#header.type4 .mobile_menu_wrapper').toggleClass('menu_on');
jQuery('body').toggleClass('menu-active');
jQuery('.mobile_menu_wrapper').slideToggle('slow');
jQuery(this).toggleClass("close_toggler");
});
jQuery('.mobile_menu a').each(function(){
jQuery(this).addClass("mob_link");
});
jQuery('.mobile_menu > li').find('> a').on("click", function() {
jQuery(this).toggleClass('showsub').parent().find('> .sub-nav').slideToggle('slow');
});

jQuery('.mobile_menu > li .sub-menu li').find('> a').on("click", function() {
jQuery(this).toggleClass('showsub').parent().find('> .sub-nav1').slideToggle('slow');
});
jQuery('.mobile_menu > li .sub-menu li').find('> a').on("click", function() {
jQuery(this).toggleClass('showsub').parent().find('> .sub-nav2').slideToggle('slow');
});
jQuery('.menu_toggler').on("click", function(e)  {
e.stopPropagation();
jQuery(this).toggleClass('active');
});
jQuery('#header.type5 .menu_toggler').on("click", function(e)  {
e.stopPropagation();
jQuery('#header.type5 .primary_menu ul.main-menu').toggleClass('menu-silde');
jQuery('#header.type5').toggleClass('overflow');
});
function menuClose() {
jQuery('body').removeClass('menu-active');
jQuery('#header.type4 a').removeClass("close_toggler");
jQuery('#header.type4 a').removeClass('active');
jQuery('#header.type4 .mobile_menu_wrapper').removeClass('menu_on');
}

jQuery(document.body).on("click", function(e)  {
if (!jQuery(e.target).is('.mobile_menu_wrapper') && !jQuery(e.target).is('.mob_link ')) {
e.stopPropagation();
menuClose();
}
});

/*====================================
Show Menu
======================================*/
jQuery(window).on('scroll', function() {
var navHeight = jQuery(window).height() - 100;
if (jQuery(window).scrollTop() > navHeight) {
jQuery('#header').addClass('on');
} else {
jQuery('#header').removeClass('on');
}
});

/*====================================
Page header height
======================================*/
var slideHeight = jQuery(window).height();
jQuery('.page-header').css('height',slideHeight);
jQuery('.particles-header').css('height',slideHeight);

jQuery(window).resize(function(){
jQuery('.page-header').css('height',slideHeight);
jQuery('.particles-header').css('height',slideHeight);
});

var Heighthalf = jQuery(window).height()/2 + 80;
var Heightfull = jQuery(window).height();
jQuery('.page-header.full').css('height',Heightfull);
jQuery('.page-header.half').css('height',Heighthalf);
jQuery('.particles-header').css('height',Heightfull);

jQuery(window).resize(function(){
jQuery('.page-header.full').css('height',Heightfull);
jQuery('.page-header.half').css('height',Heighthalf);
jQuery('.particles-header').css('height',Heightfull);
});

/*====================================
HERO SCROLL DOWN ARROW
======================================*/
$('.scroll-down').on("click", function()  {
var wh = $(window).height()-70;
$('html, body').animate({ scrollTop: wh }, 1300, 'easeInOutExpo');
return false;
});

/*====================================
Fun Fact counter
======================================*/
jQuery(".fact-number").appear(function(){
var datacount = jQuery(this).attr('data-count');
jQuery(this).find('.count-focus').delay(6000).countTo({
from: 10,
to: datacount,
speed: 3000,
refreshInterval: 50,
});
});


/*====================================
portfolio lightbox
======================================*/
(function($) {
$('.lightbox').magnificPopup({delegate: 'a.image-wrap',type:'image',gallery:{enabled:true}});
$('.lightbox-effect2').magnificPopup({delegate: 'a.expand',type:'image'});
$('.lightbox-gallery').magnificPopup({delegate: 'a.image-wrap:not(.cloned .image-wrap)',type:'image',gallery:{enabled:true}});
})(jQuery);


/*====================================
Wow animations
======================================*/

new WOW({
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}).init();

/*====================================
Partner carosel
======================================*/
(function () {
jQuery('#partner').owlCarousel({
loop:true,
margin:0,
autoplay:true,
dots:false,
responsive:{
320:{
items:2
},
480:{
items:2
},
768:{
items:4
},
992:{
items:6
}
}
});

var owl = jQuery('#partner');
owl.owlCarousel();

}());


/*====================================
team carosel
======================================*/
(function () {
jQuery('#team_slider').owlCarousel({
loop:true,
margin:10,
autoplay:true,
dots:false,
items:2,
nav:true,
autoplayHoverPause: true,
navText: [
"<i class='ion-arrow-left-c'></i>",
"<i class='ion-arrow-right-c'></i>"
],
responsive:{
320:{
items:1
},
480:{
items:1
},
768:{
items:2
},
992:{
items:2
}
},
// autoHeight : true,
animateOut: 'fade',
});
var owl = jQuery('#team_slider');
owl.owlCarousel();
}());

/*====================================
Testimonail carosel
======================================*/
(function () {
jQuery('#testimonials').owlCarousel({
loop:true,
margin:0,
items:1,
animateOut: 'fadeOut',
autoplay:true,
autoHeight:true,
dots:false
});

var owl = jQuery('#testimonials');
owl.owlCarousel();

}());

/*====================================
Parallax
======================================*/
$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive:true
			});
/*====================================
Home text slider
======================================*/
(function () {
jQuery('.text-slider').owlCarousel({
loop:true,
margin:10,
autoplay:true,
dots:false,
nav: false,
rtl: false,
items:1,
autoplayHoverPause: true,
navText: [
"<i class='ion-arrow-left-c'></i>",
"<i class='ion-arrow-right-c'></i>"
],
responsive:{
320:{
items:1
},
480:{
items:1
},
768:{
items:1
},
992:{
items:1
}
}
});
var owl = jQuery('.text-slider');
owl.owlCarousel();
}());

/*====================================
Portfolio slider right slider
======================================*/
(function () {
jQuery('.pfright').owlCarousel({
loop:true,
margin:10,
autoplay:true,
dots:false,
nav: false,
rtl: false,
autoplayHoverPause: true,
navText: [
"<i class='ion-arrow-left-c'></i>",
"<i class='ion-arrow-right-c'></i>"
],
responsive:{
320:{
items:1
},
480:{
items:2
},
768:{
items:3
},
992:{
items:4
}
}
});
var owl = jQuery('.pfright');
owl.owlCarousel();
}());

/*====================================
Portfolio slider left slider
======================================*/
(function () {
jQuery('.pfleft').owlCarousel({
loop:true,
rtl: true,
margin:10,
autoplay:true,
autoplayHoverPause: true,
dots:false,
nav: false,

navText: [
"<i class='ion-arrow-left-c'></i>",
"<i class='ion-arrow-right-c'></i>"
],
responsive:{
320:{
items:1
},
480:{
items:2
},
768:{
items:3
},
992:{
items:4
}
}
});
var owl = jQuery('.pfleft');
owl.owlCarousel();
}());

/*====================================
Masonry Blog
======================================*/
$('.owl-carousel').owlCarousel({
stagePadding: 250,
loop:true,
margin:10,
nav:false,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});

/*====================================
Typed style
======================================*/
$('#typed').typed({
stringsElement: $('#typed-strings'),
loop: true,
backDelay: 3000,
showCursor: false,
});


/*====================================
Service banner carousel
======================================*/
(function () {
jQuery('#banner').owlCarousel({
loop:true,
margin:0,
autoplay:false,
dots:false,
responsive:{
320:{
items:1
},
480:{
items:1
},
768:{
items:1
},
992:{
items:1
}
}
});

var owl = jQuery('#banner');
owl.owlCarousel();

}());



/*====================================
Portfolio Images
======================================*/
(function ($) {
"use strict";
function setBg() {
var section = $('div, section');
section.each(function () {
if ($(this).attr('data-bg')) {
var bg = $(this).attr('data-bg');
$(this).css('background-image', 'url(' + bg + ')');
}
});
}
setBg();
})(jQuery);


/*====================================
Progress Bar
======================================*/
function progress_bars() {
$(".progress .progress-bar").each(function() {
if (!$(this).hasClass("animated")) {
$(this).addClass("animated");
$(this).animate({
width: $(this).attr("data-width") + "%"
}, 2000);
}
});
}

$(window).on('scroll', function() {
progress_bars();
});

$('.skills-bar').waypoint(function() {
$('.skills li span').addClass('expand');
},
{offset: '70%'}
);

var chartSize = '110';

$('.load-skills').waypoint(function() {
$('.easy-pie-chart').easyPieChart({
animate: 1000,
scaleColor: false,
lineWidth: 3,
lineCap: 'square',
size: chartSize,
trackColor: '#e5e5e5',
barColor: '#d0ad55'
});
},
{offset: '60%'}
);


/*====================================
Scroll up
======================================*/
jQuery.scrollUp({
scrollName: 'scrollUp', // Element ID
scrollDistance: 300, // Distance from top/bottom before showing element (px)
scrollFrom: 'top', // 'top' or 'bottom'
scrollSpeed: 300, // Speed back to top (ms)
easingType: 'linear', // Scroll to top easing (see http://easings.net/)
animation: 'fade', // Fade, slide, none
animationSpeed: 200, // Animation in speed (ms)
scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
//scrollTarget: false, // Set a custom target element for scrolling to the top
scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
scrollTitle: false, // Set a custom <a> title if required.
scrollImg: false, // Set true to use image
activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
zIndex: 2147483647 // Z-Index for the overlay
});


/* ==========================================================================
scroll timer
========================================================================== */
var scrollTimer = null;
$(window).scroll(function () {
var viewportHeight = $(this).height(),
scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $('#scroll').height() / 2;
$('#scroll')
.css('top', distance)
.text(' ( ' + Math.round(progress * 100) + '%) ')
.fadeIn(100);
if (scrollTimer !== null) {
clearTimeout(scrollTimer);
}
scrollTimer = setTimeout(function () {
$('#scroll').fadeOut();
}, 1500);
});

/*====================================
Footer Height
======================================*/
footerheight();


/*====================================
Footer Height
======================================*/
function footerheight(){
if ($(window).width() > 991){
var wh = jQuery('footer.type1.sticky').height();
jQuery('#footer_space').css('min-height', wh);
}
}

/*====================================
Contact Form
======================================*/
var submitContact = $('#submit-message'),
message = $('#msg');

submitContact.on('click', function(e){
e.preventDefault();

var $this = $(this);

$.ajax({
type: "POST",
url: 'contact.php',
dataType: 'json',
cache: false,
data: $('#contact-form').serialize(),
success: function(data) {

if(data.info !== 'error'){
$this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(3000).fadeOut('slow');
} else {
message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(3000).fadeOut('slow');
}
}
});
});

/*====================================
Constellation jquery
======================================*/
(function ($, window) {

function Constellation (canvas, options) {
var $canvas = $(canvas),
context = canvas.getContext('2d'),
defaults = {
star: {
color: 'rgba(255, 255, 255, .5)',
width: 1
},
line: {
color: 'rgba(255, 255, , .5)',
width: 0.2
},
position: {
x: canvas.width * 1,
y: canvas.height * 0.5
},
width: window.innerWidth,
height: window.innerHeight,
velocity: 0.4,
length: 60,
distance: 200,
radius: 150,
stars: []
},
config = $.extend(true, {}, defaults, options);

function Star () {
this.x = Math.random() * canvas.width;
this.y = Math.random() * canvas.height;

this.vx = (config.velocity - (Math.random() * 0.5));
this.vy = (config.velocity - (Math.random() * 0.5));

this.radius = Math.random() * config.star.width;
}

Star.prototype = {
create: function(){
context.beginPath();
context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
context.fill();
},

animate: function(){
var i;
for (i = 0; i < config.length; i++) {

var star = config.stars[i];

if (star.y < 0 || star.y > canvas.height) {
star.vx = star.vx;
star.vy = - star.vy;
} else if (star.x < 0 || star.x > canvas.width) {
star.vx = - star.vx;
star.vy = star.vy;
}

star.x += star.vx;
star.y += star.vy;
}
},

line: function(){
var length = config.length,
iStar,
jStar,
i,
j;

for (i = 0; i < length; i++) {
for (j = 0; j < length; j++) {
iStar = config.stars[i];
jStar = config.stars[j];

if (
(iStar.x - jStar.x) < config.distance &&
(iStar.y - jStar.y) < config.distance &&
(iStar.x - jStar.x) > - config.distance &&
(iStar.y - jStar.y) > - config.distance
) {
if (
(iStar.x - config.position.x) < config.radius &&
(iStar.y - config.position.y) < config.radius &&
(iStar.x - config.position.x) > - config.radius &&
(iStar.y - config.position.y) > - config.radius
) {
context.beginPath();
context.moveTo(iStar.x, iStar.y);
context.lineTo(jStar.x, jStar.y);
context.stroke();
context.closePath();
}
}
}
}
}
};

this.createStars = function () {
var length = config.length,
star,
i;

context.clearRect(0, 0, canvas.width, canvas.height);

for (i = 0; i < length; i++) {
config.stars.push(new Star());
star = config.stars[i];

star.create();
}

star.line();
star.animate();
};

this.setCanvas = function () {
canvas.width = $('.particular').width();
canvas.height = config.height;
};

this.setContext = function () {
context.fillStyle = config.star.color;
context.strokeStyle = config.line.color;
context.lineWidth = config.line.width;
};

this.loop = function (callback) {
callback();

window.requestAnimationFrame(function () {
this.loop(callback);
}.bind(this));
};

this.bind = function () {
$(window).on('mousemove', function(e){
config.position.x = e.pageX - $canvas.offset().left;
config.position.y = e.pageY - $canvas.offset().top;
});
};

this.init = function () {
this.setCanvas();
this.setContext();
this.loop(this.createStars);
this.bind();
};
}

$.fn.constellation = function (options) {
return this.each(function () {
var c = new Constellation(this, options);
c.init();
});
};
})($, window);

$(".particular").constellation({
star: {
color: 'rgba(0, 0, 0, .3)',
width: 1
},
line: {
color: 'rgba(0, 0, , .2)',
width: 0.1
},
radius: 350
});
});



