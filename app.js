let gameSeq = [];
let userSeq = [];

let btns =["yellow","red","purple","green"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level - ${level}`;

    let randomIdx = Math.floor((Math.random()*3));
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
};

function checkAns(idx){
    //console.log(`Current level - ${level}`)
    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over Your Score was <b>${level}</b> <br> ! Press Any key to Start Again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";   
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userSeq=[];
    gameSeq = [];
    level = 0; 
}
