


let mobileToggle = document.querySelector('.mobile-nav');
let mobileLinks = document.querySelector('.navbar-links');
let modal = document.querySelector('.modal');
let navbar = document.querySelector('.navbar');
/* let image = document.querySelector('.gallery-wrapper');
let modalImage = document.querySelector('.myImg');
let modalG = document.querySelector('.galleryBkg');
let toggle = document.querySelector('.toggle'); */


mobileToggle.addEventListener('click', function () {
    if (mobileToggle.classList.contains('active-mob')) {
        mobileToggle.classList.remove('active-mob');
        mobileLinks.classList.remove('mobile-links');
        modal.style.display = 'none';

    } else {
        mobileToggle.classList.add('active-mob');
        mobileLinks.classList.add('mobile-links');
        modal.style.display = 'block';

    }

});

$('#myCarousel').on('slid.bs.carousel', function (e) {
    $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
  })
  
  $('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
  $('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!


