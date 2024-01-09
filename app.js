let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let msg = document.querySelector(".msg")
let msgContainer = document.querySelector(".msgContainer")

let turn0 = true ;//playerX,player0



const WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "0"
            turn0 = false
        }else{
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true
        checkWinner()
    })
    
})
const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false
        box.innerHTML = ""
    }
}


const showWinner = (winner) =>{
    msg.innerText =`Congratulation winner is ${winner}`
    msgContainer.classList.remove("hide")

}

const checkWinner = () => {
    for(let pattern of WinPattern){
        console.log(WinPattern)
        let pos1 = boxes[pattern[0]].innerText 
        let pos2 = boxes[pattern[1]].innerText 
        let pos3 = boxes[pattern[2]].innerText 

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner" ,pos1)
                disableBoxes()
                showWinner(pos1)
            }
        }
    }
    
}

reset.addEventListener("click",resetGame)