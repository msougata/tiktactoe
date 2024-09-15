let turn= "X";

const changeTurn=()=>{
    return turn === "X"?"O":"X";
}

// check win 
const checkWin=() =>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        let boxtext=document.getElementsByClassName("boxtext");
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&
           (boxtext[e[1]].innerText === boxtext[e[2]].innerText)&&
           (boxtext[e[0]].innerText !=="")){
            document.querySelector("#winner").innerText=boxtext[e[0]].innerText+"  WON";
        }
    })
}

// game logic 
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(box =>{
    let boxtext = box.querySelector(".boxtext");
    box.addEventListener("click",()=>{
        boxtext.innerText= turn;
        turn=changeTurn();
        checkWin();
    })

})