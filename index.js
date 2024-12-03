var roundRecord = [];
var CR = ["", "", "", "", "", "", "", "", ""];
var numberOfRound = document.getElementById("playRounds").value;
let turn = "X";
document.getElementById("wTurn").innerHTML = `Round ${
	roundRecord.length + 1
}, X Turn First`;

//  compute play function
const computerMove = () => {
	let number = Array.from({ length: 9 }, (_, i) => i);
	const leftOut = CR.map((item, index) => (item !== "" ? index : -1)).filter(
		(index) => index !== -1,
	);
	const aN = number.filter((num) => !leftOut.includes(num));
	const random = Math.floor(Math.random() * aN.length);
	select(aN[random], (computer = true));
};

// play function
const select = (i, computer) => {
	if (document.getElementById("player").value == "pc" && !computer) {
		if (CR[i] === "X" || CR[i] === "O") {
			return;
		} else {
			CR[i] = turn;
			if (checkDraw()) {
				if (turn === "X") {
					turn = "O";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, O Turn Next`;
				} else if (turn === "O") {
					turn = "X";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, X Turn Next`;
				}
				setIt();
				setTimeout(() => {
					if (readTableO() || readTableX()) {
						return;
					} else {
						finishRound("Draw");
					}
				}, 100);
			} else {
				if (turn === "X") {
					turn = "O";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, O Turn Next`;
					if (checkDraw()) {
						finishRound("Draw");
					} else {
						if (readTableO() || readTableX()) {
							return;
						} else {
							setTimeout(() => {
								computerMove();
							}, 200);
						}
					}
				} else if (turn === "O") {
					turn = "X";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, X Turn Next`;
					if (checkDraw()) {
						finishRound("Draw");
					} else {
						if (readTableO() || readTableX()) {
							return;
						} else {
							setTimeout(() => {
								computerMove();
							}, 200);
						}
					}
				}
				setIt();
			}
		}
	} else {
		if (CR[i] === "X" || CR[i] === "O") {
			return;
		} else {
			CR[i] = turn;
			if (checkDraw()) {
				if (turn === "X") {
					turn = "O";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, O Turn Next`;
				} else if (turn === "O") {
					turn = "X";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, X Turn Next`;
				}
				setIt();
				setTimeout(() => {
					if (readTableO() || readTableX()) {
						return;
					} else {
						finishRound("Draw");
					}
				}, 100);
			} else {
				if (turn === "X") {
					turn = "O";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, O Turn Next`;
					// if (checkDraw) {
					// finishRound;
					// }
				} else if (turn === "O") {
					turn = "X";
					document.getElementById("wTurn").innerHTML = `Round ${
						roundRecord.length + 1
					}, X Turn Next`;
				}
				setIt();
				setTimeout(() => {
					readTableO();
					readTableX();
				}, 100);
			}
		}
	}
};
const c0 = document.getElementById("c0");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");

// update table function

const setIt = () => {
	document.getElementById("c0").innerHTML = CR[0];
	document.getElementById("c1").innerHTML = CR[1];
	document.getElementById("c2").innerHTML = CR[2];
	document.getElementById("c3").innerHTML = CR[3];
	document.getElementById("c4").innerHTML = CR[4];
	document.getElementById("c5").innerHTML = CR[5];
	document.getElementById("c6").innerHTML = CR[6];
	document.getElementById("c7").innerHTML = CR[7];
	document.getElementById("c8").innerHTML = CR[8];
};
// check if o win function
const readTableO = () => {
	if (CR[0] === "O" && CR[1] === "O" && CR[2] === "O") {
		finishRound("O");
		c0.style.backgroundColor = "green";
		c1.style.backgroundColor = "green";
		c2.style.backgroundColor = "green";
		return true;
	} else if (CR[0] === "O" && CR[3] === "O" && CR[6] === "O") {
		finishRound("O");
		c0.style.backgroundColor = "green";
		c3.style.backgroundColor = "green";
		c6.style.backgroundColor = "green";
		return true;
	} else if (CR[1] === "O" && CR[4] === "O" && CR[7] === "O") {
		finishRound("O");
		c1.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c7.style.backgroundColor = "green";
		return true;
	} else if (CR[2] === "O" && CR[5] === "O" && CR[8] === "O") {
		finishRound("O");
		c2.style.backgroundColor = "green";
		c5.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else if (CR[1] === "O" && CR[4] === "O" && CR[7] === "O") {
		finishRound("O");
		c1.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c7.style.backgroundColor = "green";
		return true;
	} else if (CR[2] === "O" && CR[5] === "O" && CR[8] === "O") {
		finishRound("O");
		c2.style.backgroundColor = "green";
		c5.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else if (CR[3] === "O" && CR[4] === "O" && CR[5] === "O") {
		finishRound("O");
		c3.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c5.style.backgroundColor = "green";
		return true;
	} else if (CR[6] === "O" && CR[7] === "O" && CR[8] === "O") {
		finishRound("O");
		c6.style.backgroundColor = "green";
		c7.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else if (CR[2] === "O" && CR[4] === "O" && CR[6] === "O") {
		finishRound("O");
		c2.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c6.style.backgroundColor = "green";
		return true;
	} else if (CR[0] === "O" && CR[4] === "O" && CR[8] === "O") {
		finishRound("O");
		c0.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else {
		checkDraw();
	}
};
// check if x win function
const readTableX = () => {
	if (CR[0] === "X" && CR[1] === "X" && CR[2] === "X") {
		finishRound("X");
		c0.style.backgroundColor = "green";
		c1.style.backgroundColor = "green";
		c2.style.backgroundColor = "green";
		return true;
	} else if (CR[0] === "X" && CR[3] === "X" && CR[6] === "X") {
		finishRound("X");
		c0.style.backgroundColor = "green";
		c3.style.backgroundColor = "green";
		c6.style.backgroundColor = "green";
		return true;
	} else if (CR[1] === "X" && CR[4] === "X" && CR[7] === "X") {
		finishRound("X");
		c1.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c7.style.backgroundColor = "green";
		return true;
	} else if (CR[2] === "X" && CR[5] === "X" && CR[8] === "X") {
		finishRound("X");
		c2.style.backgroundColor = "green";
		c5.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else if (CR[1] === "X" && CR[4] === "X" && CR[7] === "X") {
		finishRound("X");
		c1.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c7.style.backgroundColor = "green";
		return true;
	} else if (CR[2] === "X" && CR[5] === "X" && CR[8] === "X") {
		finishRound("X");
		c2.style.backgroundColor = "green";
		c5.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else if (CR[3] === "X" && CR[4] === "X" && CR[5] === "X") {
		finishRound("X");
		c3.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c5.style.backgroundColor = "green";
		return true;
	} else if (CR[6] === "X" && CR[7] === "X" && CR[8] === "X") {
		finishRound("X");
		c6.style.backgroundColor = "green";
		c7.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else if (CR[0] === "X" && CR[4] === "X" && CR[8] === "X") {
		finishRound("X");
		c0.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c8.style.backgroundColor = "green";
		return true;
	} else if (CR[2] === "X" && CR[4] === "X" && CR[6] === "X") {
		finishRound("X");
		c2.style.backgroundColor = "green";
		c4.style.backgroundColor = "green";
		c6.style.backgroundColor = "green";
		return true;
	}
};
// refresh function
const refresh = () => {
	CR = ["", "", "", "", "", "", "", "", ""];
	turn = "X";
	setIt();
	document.getElementById("cover-container").innerHTML = ``;
	c0.style.backgroundColor = "#6C757D";
	c1.style.backgroundColor = "#6C757D";
	c2.style.backgroundColor = "#6C757D";
	c3.style.backgroundColor = "#6C757D";
	c4.style.backgroundColor = "#6C757D";
	c5.style.backgroundColor = "#6C757D";
	c6.style.backgroundColor = "#6C757D";
	c7.style.backgroundColor = "#6C757D";
	c8.style.backgroundColor = "#6C757D";
};
const checkWinner = () => {
	if (
		roundRecord.filter((item) => item.win == "X").length >
		roundRecord.filter((item) => item.win == "O").length
	) {
		return "X";
	} else if (
		roundRecord.filter((item) => item.win == "O").length >
		roundRecord.filter((item) => item.win == "X").length
	) {
		return "O";
	} else if (
		roundRecord.filter((item) => item.win == "O").length ===
		roundRecord.filter((item) => item.win == "X").length
	) {
		return "Draw";
	}
};

// finish round function
const finishRound = (i) => {
	if (i !== "Draw") {
		roundRecord.push({ record: CR, win: i });
		setTimeout(() => {
			const OScore = roundRecord.filter((item) => `${item.win}` == "O");
			const XScore = roundRecord.filter((item) => `${item.win}` == "X");
			document.getElementById("o-score").innerHTML = OScore.length;
			document.getElementById("x-score").innerHTML = XScore.length;
			if (roundRecord.length >= playRounds.value) {
				document.getElementById("cover-container").innerHTML = `<div
					id="cover"
					style="
						width: 100dvw;
						height: 100dvh;
						z-index: 999 !important;
						background-color: rgb(0, 0, 0, 0.9);
					"
					class="d-flex justify-content-center align-items-center"
				>
					<div>
						<div class="text-center">
							<img
								src="./New folder/logo.png"
								class="mx-auto"
								width="100"
								alt=""
							/>
						</div>
						<div class="text-center">
							<h2>Congratulations! ${checkWinner()} Wins The Game</h2>
							<button class="btn btn-light" onclick="Again()">Play Again</button>
						</div>
					</div>
				</div>`;
			} else {
				document.getElementById("cover-container").innerHTML = `<div
					id="cover"
					style="
						width: 100dvw;
						height: 100dvh;
						z-index: 999 !important;
						background-color: rgb(0, 0, 0, 0.9);
					"
					class="d-flex justify-content-center align-items-center"
				>
					<div>
						<div class="text-center">
							<img
								src="./New folder/logo.png"
								class="mx-auto"
								width="100"
								alt=""
							/>
						</div>
						<div class="text-center">
							<h2>${i} Wins The Round</h2>
							<button class="btn btn-light" onclick="refresh()">Continue</button>
						</div>
					</div>
				</div>`;
			}
		}, 100);
	} else {
		roundRecord.push({ record: CR, win: i });
		document.getElementById("cover-container").innerHTML = `<div
					id="cover"
					style="
						width: 100dvw;
						height: 100dvh;
						z-index: 999 !important;
						background-color: rgb(0, 0, 0, 0.9);
					"
					class="d-flex justify-content-center align-items-center"
				>
					<div>
						<div class="text-center">
							<img
								src="./New folder/logo.png"
								class="mx-auto"
								width="100"
								alt=""
							/>
						</div>
						<div class="text-center">
							<h2>The Round is a Draw</h2>
							<button class="btn btn-light" onclick="refresh()">Continue</button>
						</div>
					</div>
				</div>`;
	}
};

// check draw function
const checkDraw = () => {
	if (
		CR[0] === "" ||
		CR[1] === "" ||
		CR[2] === "" ||
		CR[3] === "" ||
		CR[4] === "" ||
		CR[5] === "" ||
		CR[6] === "" ||
		CR[7] === "" ||
		CR[8] === ""
	) {
		return false;
	} else {
		return true;
	}
};

// restart function
const Again = () => {
	CR = ["", "", "", "", "", "", "", "", ""];
	roundRecord = [];
	numberOfRound = document.getElementById("playRounds").value;
	setTimeout(() => {
		setIt();
	}, 100);
	document.getElementById("o-score").innerHTML = 0;
	document.getElementById("x-score").innerHTML = 0;
	document.getElementById("cover-container").innerHTML = ``;
	let turn = "X";
	refresh();
};

setIt();
