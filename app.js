
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');



gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('img-thumbnail')) {
        e.target.classList.add('zoomed');
        modal.style.display = 'block';
        console.log("clicked");
        modal.addEventListener('click', function () {
            modal.style.display = 'none';
            e.target.classList.remove('zoomed');
        })
    }

})

/* let modalk = document.querySelector('.galleryBkg');
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
})   */




/* const modalG = document.querySelector('.modalG');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modalG.classList.add('open');
        original.classList.add('open');
        const originalSrc = preview.getAttribute('data-original');
        original.src = originalSrc;
    });
});

modalG.addEventListener('click', (event) => {
    if (event.target === modalG) {
        modalG.classList.remove('open');
        original.classList.remove('open');
        original.src = '';

    }
})

/* MODAL IMAGE GALLERY */

/* let modalk = document.querySelector('.galleryBkg');
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
})   */

//Get the button:
/* mybutton = document.getElementById("myBtn");
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
} */

