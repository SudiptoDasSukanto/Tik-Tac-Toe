console.log("Welcome to Tic Tak Toe");
let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOverMusic =  new Audio("gameover.mp3");

let turn = "X";

const changeTurn =() =>{
    return turn === "X"?"0":"X";
}

const checkWin =() =>{

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext =  element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(boxtext.innerHTML==''){
        boxtext.innerHTML = turn ;
        turn = changeTurn();
        turnMusic.play();
        checkWin();
    }
})
})