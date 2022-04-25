const slaiderButtons = document.querySelectorAll('.slaider__button'),
    slaides = document.querySelectorAll('.slaider__item');
let index = 0;

const activeSlide = n =>{
    for(slide of slaides){
        slide.classList.remove('slaid_active');
    }
    slaides[n].classList.add('slaid_active');
}

const activeButton = i =>{
    for(button of slaiderButtons){
        button.classList.remove('section4__button_active');
    }
    slaiderButtons[i].classList.add('section4__button_active');
}

slaiderButtons.forEach((item,indexButton) =>{
    item.addEventListener('click', () => {
        index = indexButton;
        activeSlide(index);
        activeButton(index);
    });
})