const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll', myFunction);
function myFunction() {
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log("trigger bottom is" + triggerBottom);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log("boxtop is" + boxTop);
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}