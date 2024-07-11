const right = document.querySelector('.page_right');
const left = document.querySelector('.page_left');

right.addEventListener('mouseover', () => {
    right.classList.add('effect-big');
    left.classList.add('effect-small');
})

right.addEventListener('mouseout', () => {
    right.classList.remove('effect-big');
    left.classList.remove('effect-small');
})

//#############################################

left.addEventListener('mouseover', () => {
    left.classList.add('effect-big');
    right.classList.add('effect-small');
})

left.addEventListener('mouseout', () => {
    left.classList.remove('effect-big');
    right.classList.remove('effect-small');
})



