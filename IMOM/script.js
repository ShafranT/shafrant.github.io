const start_reg = document.querySelector(".start-reg");
const close_reg = document.querySelector(".popup-close");
const popup_reg = document.querySelector(".popup");

start_reg.addEventListener('click', function() {
    popup_reg.classList.add('active');
})

close_reg.addEventListener('click', function() {
    popup_reg.classList.remove('active');
})