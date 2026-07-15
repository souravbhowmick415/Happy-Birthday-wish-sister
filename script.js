// ----------------------------
// Photo Slideshow
// ----------------------------

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {

    current++;

    if(current >= photos.length){
        current = 0;
    }

    slide.style.opacity = 0;

    setTimeout(()=>{

        slide.src = photos[current];
        slide.style.opacity = 1;

    },500);

},3000);


// ----------------------------
// Music
// ----------------------------

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function(){

    if(music.paused){

        music.play();
        musicBtn.innerHTML="⏸ Pause Music";

    }else{

        music.pause();
        musicBtn.innerHTML="🎵 Play Music";

    }

};


// ----------------------------
// Confetti
// ----------------------------

function blastConfetti(){

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

}

// Initial Confetti
setTimeout(blastConfetti,600);


// Celebrate Button

document.getElementById("celebrate").onclick=function(){

    blastConfetti();

    setTimeout(blastConfetti,400);

    setTimeout(blastConfetti,800);

};


// ----------------------------
// Floating Hearts
// ----------------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (5+Math.random()*5)+"s";

    heart.style.fontSize=
    (18+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,400);


// ----------------------------
// Floating Balloons
// ----------------------------

const balloons=["🎈","🎉","🎀","💖"];

function createBalloon(){

    const b=document.createElement("div");

    b.className="balloon";

    b.innerHTML=
    balloons[Math.floor(Math.random()*balloons.length)];

    b.style.left=Math.random()*100+"vw";

    b.style.animationDuration=
    (8+Math.random()*6)+"s";

    b.style.fontSize=
    (30+Math.random()*25)+"px";

    document.body.appendChild(b);

    setTimeout(()=>{
        b.remove();
    },15000);

}

setInterval(createBalloon,700);


// ----------------------------
// Firework Confetti
// ----------------------------

function fireworks(){

    var duration = 3000;
    var animationEnd = Date.now() + duration;

    var interval = setInterval(function(){

        if(Date.now() > animationEnd){

            clearInterval(interval);
            return;

        }

        confetti({
            particleCount:5,
            angle:60,
            spread:55,
            origin:{x:0}
        });

        confetti({
            particleCount:5,
            angle:120,
            spread:55,
            origin:{x:1}
        });

    },180);

}

fireworks();


// ----------------------------
// Floating Message
// ----------------------------

const wishes=[
"🎂 Happy Birthday!",
"💖 Stay Blessed!",
"🌸 Keep Smiling!",
"🎉 Enjoy Your Day!"
];

setInterval(()=>{

    const msg=document.createElement("div");

    msg.innerHTML=
    wishes[Math.floor(Math.random()*wishes.length)];

    msg.style.position="fixed";
    msg.style.left=Math.random()*80+"vw";
    msg.style.bottom="0";
    msg.style.color="white";
    msg.style.fontWeight="bold";
    msg.style.fontSize="22px";
    msg.style.opacity="0.9";
    msg.style.transition="4s";

    document.body.appendChild(msg);

    setTimeout(()=>{
        msg.style.transform="translateY(-400px)";
        msg.style.opacity="0";
    },100);

    setTimeout(()=>{
        msg.remove();
    },4200);

},2500);