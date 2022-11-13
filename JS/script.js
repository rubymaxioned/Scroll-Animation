const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll', myFunction);
function myFunction() {
    const triggerBottom = window.innerHeight / 2;
    console.log("trigger bottom is" + triggerBottom);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}