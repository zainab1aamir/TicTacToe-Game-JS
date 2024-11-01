let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newGameBtn = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".message");
let msg = document.querySelector(".msg");

let turn0 = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = () =>{
    turn0 = true;   
    enableBoxes();
    msgContainer.classList.add("hide");

}

btn.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

    checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of btn){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of btn){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner =  (winner) =>{
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

let checkWinner = () =>{
    for(let pattern of winPatterns){
        
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText; 

        if(pos1val != ""  && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);

                
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
