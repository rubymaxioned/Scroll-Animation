const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll', myFunction);
function myFunction() {
    const triggerBottom = (window.innerHeight * 3) / 4;
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