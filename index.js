
window.onload=function(){

    const p_btns = document.querySelector(".p-btns");
    const p_btn = document.querySelectorAll(".p-btn");
    const img_ovelay = document.querySelectorAll(".img-ovelay");
    const p_btn2 = Array.from(p_btn);

    // click event

    p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    p_btn2.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    // button num

    const getNum = p_btn_clicked.dataset.btnNum;

    // specific image 
    
    img_ovelay.forEach((curElem) => curElem.classList.add('p-btn_notActive'));
    const Img_active = document.querySelectorAll(`.p-btn--${getNum}`);
    Img_active.forEach((curElem) => curElem.classList.remove('p-btn_notActive'));

    })

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        autoplay: {
            delay:2500,
        }
    });

};
