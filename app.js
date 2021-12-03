


let mobileToggle = document.querySelector('.mobile-nav');
let mobileLinks = document.querySelector('.navbar-links');
let modal = document.querySelector('.modal');
let navbar = document.querySelector('.navbar');
let image = document.querySelector('.gallery-wrapper');
let modalImage = document.querySelector('.myImg');
let modalG = document.querySelector('.galleryBkg');
let toggle = document.querySelector('.toggle');


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




