// accordion

let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));

accordionBtn2.forEach((item)=>{
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
        item.classList.toggle('active');
    })
})