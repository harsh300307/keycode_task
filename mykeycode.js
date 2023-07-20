a = 0;
b = 500;
d = 180;
document.addEventListener("keydown", (birds) => {

    if (birds.keyCode == 39) {
        bird.style.marginLeft = a + "px";
        bird.style.transform = "rotate(0deg)";
        if (a == 1130) {
            location.reload();
        }
        a = a + 10;

    }
    if (birds.keyCode == 40) {
        bird.style.marginTop = b + "px";
        bird.style.transform = "rotate(60deg)";
        if (b == 500) {
            location.reload();
        }
        b = b + 10;

    }
    if (birds.keyCode == 38) {
        bird.style.marginTop = b + "px";
        bird.style.transform = "rotate(-30deg)";
        if (b == -70) {
            location.reload();
        }
        b = b - 10;
    }
    if (birds.keyCode == 37) {
        bird.style.marginLeft = a + "px";
        bird.style.transform = "rotate(0deg)";
        bird.style.transform = "rotateY(180deg)";
        if (a == -90) {
            location.reload();
        }
        a = a - 10;
    }

})  