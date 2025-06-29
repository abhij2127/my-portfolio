let scrollable = document.getElementById('main');
let leftScroll = document.getElementById('leftSlide');
let rightScroll = document.getElementById('rightSlide');
let btn = document.getElementById('res');

rightScroll.addEventListener('click', ()=>{
    console.log(scrollable)
    scrollable.scrollBy({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
})

leftScroll.addEventListener('click', ()=>{
    console.log(scrollable)
    scrollable.scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth'
    });
})

btn.addEventListener('click', ()=>{
    window.open("./RESUME.pdf");
});
