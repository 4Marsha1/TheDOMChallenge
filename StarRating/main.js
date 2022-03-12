const stars = document.querySelectorAll('.star');
const starContainer = document.getElementById('stars');
const rating = document.getElementById('rating');

let save = false;

stars.forEach((star, idx) => {
    star.addEventListener('click', () => {
        for (let i = 0; i <= idx; ++i) {
            stars[i].classList.remove('fa-regular')
            stars[i].classList.add('fa-solid')
        }
        save = true;
        return;
    })
    star.addEventListener('mouseover', () => {
        save = false;
        for (let i = 0; i <= idx; ++i) {
            stars[i].classList.remove('fa-regular')
            stars[i].classList.add('fa-solid')
        }
        for (let i = idx + 1; i < stars.length; ++i) {
            stars[i].classList.remove('fa-solid')
            stars[i].classList.add('fa-regular')
        }
        rating.textContent = idx + 1
    })
})

starContainer.addEventListener('mouseleave', () => {
    if (!save) {
        stars.forEach(star => {
            star.classList.remove('fa-solid');
            star.classList.add('fa-regular')
        })
        rating.textContent = 0
    }
})

