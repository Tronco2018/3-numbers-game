function getValue(id){
	return document.getElementById(id).value;
}

function randomValue(){
	let number = Math.floor(Math.random()*11);
	return number;
}

function submit(){
	let plOneNum = getValue("pOneNum");
	let plTwoNum = getValue("pTwoNum");
	let plThreeNum = getValue("pThreeNum");
	let random = randomValue();
	document.getElementById("lastNumLabel").innerText = "Random Value:" + random;
	let winner;
	if (plOneNum === "" || plTwoNum === "" || plThreeNum === ""){
		alert("Fill all thingy");
		return;
	}
	const diffOne = Math.abs(Number(plOneNum) - Number(random));
	const diffTwo = Math.abs(Number(plTwoNum) - Number(random));
	const diffThree = Math.abs(Number(plThreeNum) - Number(random));

	if (diffOne <= diffTwo && diffOne <= diffThree){ 
		winner = "one";
	}
	else if (diffTwo <= diffOne && diffTwo <= diffThree){
		winner = "two";
	} else if (diffThree <= diffOne && diffThree <= diffTwo){
		winner = "three";
	}

	if (winner === "one"){
		if (getValue("pOneName") === ""){
			alert("Winner is one, but no name was inserted :c");
			return;
		}
		alert("Winner: " + getValue("pOneName"));
	} else if (winner === "two"){
		if (getValue("pTwoName") === ""){
			alert("Winner is two, but no name was inserted :c");
			return;
		}
		alert("Winner: " + getValue("pTwoName"));
	} else if (winner === "three"){
		if (getValue("pThreeName") === ""){
			alert("Winner is three, but no name was inserted :c");
			return;
		}
		alert("Winner: " +  getValue("pThreeName"));
	} else {
		alert("No one won");
	}
}

