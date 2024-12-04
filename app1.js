let gameseq = [];
let userseq = [];
let btns = ["box1","box2","box3","box4"];

let started = false;
let level = 0;

let h3=document.querySelector("h3");

let btn=document.querySelectorAll("innerdiv");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userseq = [];
    level++;
    h3.innerText=(`level ${level}`);

    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    btnFlash(randomBtn);
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAnswer(userseq.length-1);
}

let allBtns=document.querySelectorAll(".innerDiv");

for(button of allBtns){
    button.addEventListener("click",btnPress);
}

function checkAnswer(idx){
    
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=(`game over!!! your score is <b><b>${level}</b></b> <br> press any key to restart`);
        document.querySelector("body").style.backgroundColor = "#f26a8d";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#ffcddf";
        } , 250);
        reset();
    }
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level=0;
}

