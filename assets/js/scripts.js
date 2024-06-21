/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/


document.addEventListener("DOMContentLoaded", () => {
    const readMoreModal = document.getElementById('ReadMoreModal');
    const navLinks = document.querySelectorAll('.navbar-nav > li > a');

    readMoreModal.addEventListener('show.bs.modal',  (event) => {
        let button = event.relatedTarget;
        
        let title = button.getAttribute('data-title');        
        let subtitle = button.getAttribute('data-subtitle');
        let firstDescription = button.getAttribute('data-first-description');
        let secondDescription = button.getAttribute('data-second-description');
        let imageSrc = button.getAttribute('data-image');
        
        let modalTitle = readMoreModal.querySelector('h1');
        let modalSubtitle = readMoreModal.querySelector('h5');
        let modalP = readMoreModal.querySelectorAll('p');
        let image = readMoreModal.querySelector('img');
        
        modalTitle.textContent = title;
        modalSubtitle.textContent = subtitle;
        modalP[0].textContent = firstDescription;
        modalP[1].textContent = secondDescription;
        image.src = imageSrc;
    });
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            let navbarCollapse = document.querySelector('.navbar-collapse');
            let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});