const coords = { x: 0, y: 0 };
const circ = document.querySelectorAll(".circle");
const colors = [
    "#ffffff", "#effdff", "#defcff", "#ccfaff", "#baf8ff", "#a5f6ff", "#8ff4ff", "#75f2ff"
];

circ.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor=colors[index%colors.length];
});

window.addEventListener('mousemove', function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circ.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circ.length - index) / circ.length})`;
        circle.x = x;
        circle.y = y;

        const nextCircle = circ[index + 1] || circ[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.5;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowCenterY = window.scrollY + window.innerHeight / 2;

    reveals.forEach(function (reveal) {
        if (windowCenterY > reveal.offsetTop) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}
