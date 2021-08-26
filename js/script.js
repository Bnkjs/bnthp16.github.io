
// <------------ DOM SELECTORS ------------->
const welcome = document.querySelector("#welcome")
const inputUserName = document.querySelector('#name')
const btn_submit = document.querySelector('#btn-start')
const userName = document.querySelector('.username')
const robotName = document.querySelector('.robot-name')
const gameContent = document.querySelector('#game-content')
gameContent.style.display = "none"
const nameFight = document.querySelector('.name-fight')
const resultRound = document.querySelector('.result-round')
const actionsChoices = document.querySelectorAll('.user-choice')
const actionDisplay = document.querySelectorAll('.handFree')
const ringSVG = document.querySelector('.ring-svg')
ringSVG.style.display= "none"
const audioPlayer = new Audio('./assets/audio/whoosh.mp3')

console.log(audioPlayer);
// <------------ DOM SELECTORS ------------->
// <------------ ROBOT PLAYER ------------->
const robots = ["Zorg-hS35K 🤖"," Zorg-Trz7cHEat 🤖", "Zorg-stellar 🤖"]
const randomRobotChoice = (Math.floor(Math.random() * robots.length))
// <------------ ROBOT PLAYER ------------->
// <---------- FUNCTIONS ------------->
startGame = () => {
  localStorage.setItem('username', JSON.stringify(inputUserName.value))
  userName.innerHTML = `${'😎 ' + inputUserName.value}`
  robotName.innerHTML = `${robots[randomRobotChoice]}`
  welcome.style.display ="none"
  actionDisplay[0].src = 'assets/svg/hand_free.svg'
  actionDisplay[1].src = 'assets/svg/hand_free.svg'
  gameContent.style.display = "flex"
  ringSVG.style.display= "block"
}

btn_submit.addEventListener('click',playerName = (e) => {
    if( inputUserName.value === ""){
      e.preventDefault()
      alert('Il me faut ton pseudo !!!')
    }
    else{
      startGame()
      nameFight.innerHTML =`${inputUserName.value} !!`
    }
    
 })
 
//  actionsChoices[0].addEventListener('click',()=>{
//     rules(actionsChoices[0].title,actionsChoices[randomRobotChoice].title.title)
//  })

for(let i = 0; i < actionsChoices.length; i++){
  actionsChoices[i].addEventListener('click', ()=>{
    audioPlayer.play()
    const player = actionsChoices[i].title
    const playerImgChoice = actionsChoices[i].src
    const randomRobotChoice = (Math.floor(Math.random() * actionsChoices.length))
    const robotImgChoice = actionsChoices[randomRobotChoice].src
    if(player === actionsChoices[randomRobotChoice].title){
      actionDisplay[0].src = playerImgChoice
      actionDisplay[1].src = robotImgChoice
       resultRound.innerHTML = 'Égalité 🙈🙈'
    }
    else if ((player === "Rock" && actionsChoices[randomRobotChoice].title === "Scissors") || 
    (player === "Scissors" && actionsChoices[randomRobotChoice].title === "Paper") || (player === "Paper" && actionsChoices[randomRobotChoice].title === "Rock")){
      actionDisplay[0].src = playerImgChoice
      actionDisplay[1].src = robotImgChoice
      resultRound.innerHTML = "Gagné 🥳 🤩";
    }
    else{
      actionDisplay[0].src = playerImgChoice
      actionDisplay[1].src = robotImgChoice
      resultRound.innerHTML="Perdu...😤"
    }
  })
}
 // <---------- FUNCTIONS ------------->

