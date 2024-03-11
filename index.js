window.onload = function () {
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

    img_ovelay.forEach((curElem) => curElem.classList.add("p-btn_notActive"));
    const Img_active = document.querySelectorAll(`.p-btn--${getNum}`);
    Img_active.forEach((curElem) =>
      curElem.classList.remove("p-btn_notActive")
    );
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //     delay:2500,
    // }
  });

  // -------------------
  // scroll to top icon
  // ----------------------

  const scrollElem = document.createElement("div");
  scrollElem.classList.add("scroll_to_top");
  scrollElem.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll_to_top"></ion-icon>`;
  const footerSec = document.querySelector(".section-footer");

  footerSec.after(scrollElem);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollElem.addEventListener("click", scrollToTop);

  // -------------------
  // counter numbers
  // -------------------

  const counterNumber = document.querySelectorAll(".counter-numbers");
  const speed = 200;

  const updateCounter = (counterElem) => {
    const targetNum = parseInt(counterElem.dataset.number);
    const initValue = parseInt(counterElem.innerText);
    const incNumber = Math.trunc(targetNum / speed);

    if (initValue < targetNum) {
      counterElem.innerText = `${initValue + incNumber}+`;
      setTimeout(() => updateCounter(counterElem), 10);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".counter-numbers").forEach((counterElem) => {
    observer.observe(counterElem);
  });

  // -------------------
  // mobile navbar
  // -------------------
  
  const menIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closIcon');
  const headerElem = document.getElementById('header');

  console.log(menIcon);
  console.log(headerElem);

  menIcon.addEventListener('click', function () {
    headerElem.classList.add('active');
    menIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
  });

  closeIcon.addEventListener('click', function () {
    headerElem.classList.remove('active');
    menIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
  });

};
