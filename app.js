let boxes = document.querySelectorAll(".box");
let newGameButton = document.querySelector("#newButton");
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("win");
    });
    currentPlayer = "X";
    isGameActive = true;
    document.getElementById("status").innerText = "Player X's turn";
});

const winningCombinations = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn0 = true;
let isGameActive = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!isGameActive || box.innerText !== "") return;

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            document.getElementById("status").innerText = "Player X's turn";
        } else {
            box.innerText = "X";
            turn0 = true;
            document.getElementById("status").innerText = "Player O's turn";
        }

        checkWinner();
    });
});

function checkWinner() {
    let winnerFound = false;

    winningCombinations.forEach((combo) => {
        const [a, b, c] = combo;
        const boxA = boxes[a].innerText;
        const boxB = boxes[b].innerText;
        const boxC = boxes[c].innerText;

        if (boxA && boxA === boxB && boxB === boxC) {
            boxes[a].classList.add("win");
            boxes[b].classList.add("win");
            boxes[c].classList.add("win");

            document.getElementById("status").innerText = `Player ${boxA} wins! 🎉`;
            isGameActive = false;
            winnerFound = true;
        }
    });
    
    if (!winnerFound && [...boxes].every(box => box.innerText !== "")) {
        document.getElementById("status").innerText = "It's a draw! 🤝";
        isGameActive = false;
    }
}

