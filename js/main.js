const portfolioItems = document.querySelectorAll('.portfolio-item-box');

portfolioItems = forEach(portfolioItem => {
    portfolioItems.addEventListener('mouseover' , () => {
        portfolioItem.childNodes[1].classList.add('portfolio-img-darken')
    })
});