let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 4000); // Pindah slide setiap 5 detik (5000 milidetik)
}

function stopSlider() {
    clearInterval(slideInterval);
}

showSlide(slideIndex);
startSlider(); // Mulai slider otomatis

// Tambahkan event listener untuk mouseover dan mouseout pada slider
document.querySelector('.slider-container').addEventListener('mouseover', stopSlider);
document.querySelector('.slider-container').addEventListener('mouseout', startSlider);

// Mendapatkan elemen gambar dan teks
const imageElements = document.querySelectorAll('.image-animate');
const textElements = document.querySelectorAll('.text-animate');

// Mendeteksi scroll
window.addEventListener('scroll', function() {
    // Loop melalui elemen gambar
    imageElements.forEach(function(imageElement) {
        // Mendapatkan posisi elemen gambar relatif terhadap viewport
        const rect = imageElement.getBoundingClientRect();
        
        // Memeriksa apakah elemen gambar masuk ke dalam viewport
        if (rect.top < window.innerHeight) {
            // Jika masuk ke dalam viewport, tambahkan kelas 'animated'
            imageElement.classList.add('animated');
        }
    });

    // Loop melalui elemen teks
    textElements.forEach(function(textElement) {
        // Mendapatkan posisi elemen teks relatif terhadap viewport
        const rect = textElement.getBoundingClientRect();
        
        // Memeriksa apakah elemen teks masuk ke dalam viewport
        if (rect.top < window.innerHeight) {
            // Jika masuk ke dalam viewport, tambahkan kelas 'animated'
            textElement.classList.add('animated');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var contactLink = document.getElementById('contact-link');
    var contactSection = document.querySelector('.container-contact');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
