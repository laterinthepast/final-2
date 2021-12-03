


let mobileToggle = document.querySelector('.mobile-nav');
let mobileLinks = document.querySelector('.navbar-links');
let modal = document.querySelector('.modal');
let navbar = document.querySelector('.navbar');



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

/* MODAL IMAGE GALLERY */

let modalk = document.querySelector('.galleryBkg');
let closeModal = document.querySelector('.toggle');
let gallery = document.querySelector('.gallery-wrapper');


gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('myImg')) {
        e.target.classList.add('active');
        modalk.style.display = 'block';
        closeModal.addEventListener('click', function () {
            modalk.style.display = 'none';
            e.target.classList.remove('active');
        })
    }

})


