const timer = document.querySelector('#counter');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const heartBtn = document.querySelector('#heart');
const pauseBtn = document.querySelector('#pause');
const submitBtn = document.querySelector('#submit');
const commentForm = document.querySelector('#comment-form')

let count = 0
//  Set counter counting
document.addEventListener('DOMContentLoaded', (e) => {
    count = setTimeout(count = 1000);
}); 
debugger
// ! v ^ something is broken. It counts within the Console, but not on the page. ^ v
setInterval(function(){
    console.log(count++)
}, 1000);
// Allows button to add integers to the 
plusBtn.addEventListener('click', () => {
    // counter++;
    timer.innerHTML = count 
})
// Allows button to subtract 
minusBtn.addEventListener('click', () => {
    // counter--;
    timer.innerHTML = --count
})
// ! Not working!
pauseBtn.addEventListener('click', () => {
    const playPause = () => {
        if (timer.paused) {
            timer.play();
            pauseBtn.innerHTML = 'Pause';
        }
        else {
            timer.pause();
            pauseBtn.innerHTML = 'Play';
        }
    } 
})