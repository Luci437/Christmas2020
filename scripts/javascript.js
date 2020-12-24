function setParticles() {
    const totalSnow = 1;
    let currentSnow = 0;
    setInterval(() => {
        let randomSnow = Math.floor(Math.random() * 100 );
        if(randomSnow % 2 == 0) {
            createParticle();
            currentSnow++;
        }
        if(currentSnow == totalSnow) {
            clearInterval(this);
        }
    }, 1);

    const hat = document.getElementById("christmas-hat");
    const text1 = document.getElementsByClassName('title1');
    hat.style.left = text1[0].offsetLeft + "px";
    hat.style.top = text1[0].offsetTop - 120 + "px";
    console.log(text1[0].offsetLeft);
    console.log(text1[0].offsetTop);

    const allname = document.getElementById('all-name');
    const inText = "RENIZABYNIRMALDONALEXKAMALSACHINCHRISTOJINTOAKHIL";
    let val = 0;
    while(val < 10) {
        allname.innerHTML += inText;
        val++;
    }
}

function createParticle() {
    const screenWidth = Math.floor(Math.random() * 2000);
    const circle = document.createElement("div");
    let snowSpeed = 20;
    circle.classList.add('circle');
    circle.style.left = screenWidth + "px";
    circle.style.animationDuration = Math.floor(Math.random() * snowSpeed) + "s";
    circle.style.opacity = Math.random() * 1;
    if(screenWidth % 13 == 0) {
        circle.style.width = "8px";
        circle.style.height = "8px";
        circle.style.filter = "blur(10px)";
    }
    document.getElementById('body').appendChild(circle);
}