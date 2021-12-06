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
let gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('myImg')) {
        e.target.classList.add('active');
        modalk.style.display = 'block';
        console.log("clicked");
        closeModal.addEventListener('click', function () {
            modalk.style.display = 'none';
            e.target.classList.remove('active');
        });
    }
})
//Get the button:
mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





