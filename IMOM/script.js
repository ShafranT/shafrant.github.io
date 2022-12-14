const popupLinks = document.querySelectorAll(".popup-link");
for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function(e) {
        const reg_form = document.getElementById('reg-form');
        const body = document.querySelector('body');
        reg_form.classList.add('open');
        body.classList.add('lock');
        console.log(body);
        reg_form.addEventListener('click', function(e) {
            if(!e.target.closest('.popup-content')) {
                reg_form.classList.remove('open');
                body.classList.remove('lock');
            }
        })
    })
}
const popupCloseItems = document.querySelectorAll('.popup-close');
for (let i = 0; i < popupCloseItems.length; i++) {
    const popupClose = popupCloseItems[i];
    popupClose.addEventListener("click", function(e) {
        const reg_form = document.getElementById('reg-form');
        const body = document.querySelector('body');
        reg_form.classList.remove('open');
        body.classList.remove('lock');
        console.log(body);
    })
}
document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        const reg_form = document.getElementById('reg-form');
        const body = document.querySelector('body');
        reg_form.classList.remove('open');
        body.classList.remove('lock');
    }
})