let door1 = document.getElementById('door1')
let door2 = document.getElementById('door2')
let door3 = document.getElementById('door3')
let startButton = document.getElementById('start')

const botDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/beach.svg'
const spaceDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/space.svg'
const closedDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'

let numClosedDoors = 3
let currentlyPlaying = true

let openDoor1
let openDoor2
let openDoor3

const randomChoreDoorGenerator = () => {
	let choreDoor = Math.floor(Math.random() * numClosedDoors)

	if (choreDoor === 0) {
		openDoor1 = botDoorPath
		openDoor2 = beachDoorPath
		openDoor3 = spaceDoorPath
	} else if (choreDoor === 1) {
		openDoor1 = beachDoorPath
		openDoor2 = spaceDoorPath
		openDoor3 = botDoorPath
	} else {
		openDoor1 = spaceDoorPath;
		openDoor2 = botDoorPath;
		openDoor3 = beachDoorPath
	}
}

door1.onclick = () => {
	if (currentlyPlaying && !isClicked(door1)) {
		door1.src = openDoor1
		playDoor(door1)
	}
}
door2.onclick = () => {
	if (currentlyPlaying && !isClicked(door2)) {
		door2.src = openDoor2
		playDoor(door2)
	}
}
door3.onclick = () => {
	if (currentlyPlaying && !isClicked(door3)) {
		door3.src = openDoor3
		playDoor(door3)
	}
}

const startRound = (params) => {
	door1.src = closedDoorPath;
	door2.src = closedDoorPath;
	door3.src = closedDoorPath;
	numClosedDoors = 3
	startButton.innerHTML = "Good luck!";
	currentlyPlaying = true
	randomChoreDoorGenerator()
}

startButton.onclick = () => {
	startRound()
}

const playDoor = (door) => {
	numClosedDoors--
	if (numClosedDoors === 0) {
		gameOver('win')
	} else if (isBot(door)) {
		gameOver()
	}
}

const isClicked = (door) => {
	if (door.src === closedDoorPath) {
		return false
	}
	return true
}

const isBot = (door) => {
	if (door.src === botDoorPath) {
		return true
	}
	return false
}

const gameOver = (status) => {
	if (status === 'win') {
		startButton.innerHTML = 'You win! Play again?'
	} else {
		startButton.innerHTML = 'Game over! Play again?'
	}
	currentlyPlaying = false
}

startRound()