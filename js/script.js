

// <------------ ROBOT PLAYER ------------->
const robots = ["Zorg-hS35K 🤖"," Zorg-Trz7cHEat 🤖", "Zorg-stellar 🤖"]
const randomRobotChoice = (Math.floor(Math.random() * robots.length))
// <------------ ROBOT PLAYER ------------->
// <---------- FUNCTIONS ------------->
startGame = () => {
  userName.innerHTML = `${'😎 ' + inputUserName.value}`
  robotName.innerHTML = `${robots[randomRobotChoice]}`
  spanNameFighter.innerHTML =` ${inputUserName.value} !!`
  welcome.style.display ="none"
  wrapContent.appendChild(gameContent)
  gameContent.style.display = "flex"
  console.log(ringSVGSelector);
  ringSVGSelector.style.visibility= "visible"
  const actionsChoicesSelector = document.querySelectorAll('.user-choice')
  for(let i = 0; i < actionsChoicesSelector.length; i++){
    actionsChoicesSelector[i].addEventListener('click', ()=>{
      audioPlayer.play()
      const actionsDisplaySelector = document.querySelectorAll('.handFree')
      const player = actionsChoicesSelector[i].title
      const playerImgChoice = actionsChoicesSelector[i].src
      const randomRobotChoice = (Math.floor(Math.random() * actionsChoicesSelector.length))
      const robotImgChoice = actionsChoicesSelector[randomRobotChoice].src
      if(player === actionsChoicesSelector[randomRobotChoice].title){
        actionsDisplaySelector[0].src = playerImgChoice
        actionsDisplaySelector[1].src = robotImgChoice
        resultRound.innerHTML = 'Égalité 🙈🙈'
      }
      else if ((player === "Rock" && actionsChoicesSelector[randomRobotChoice].title === "Scissors") || 
      (player === "Scissors" && actionsChoicesSelector[randomRobotChoice].title === "Paper") || (player === "Paper" && actionsChoicesSelector[randomRobotChoice].title === "Rock")){
        actionsChoicesSelector[0].src = playerImgChoice
        actionsChoicesSelector[1].src = robotImgChoice
        resultRound.innerHTML = "Gagné 🥳 🤩";
      }
      else{
        actionsChoicesSelector[0].src = playerImgChoice
        actionsChoicesSelector[1].src = robotImgChoice
        resultRound.innerHTML="Perdu...😤"
      }
    })
  }
 

}
btn_submit.addEventListener('click',playerName = (e) => {
    if( inputUserName.value === ""){
      e.preventDefault()
      alert('Il me faut ton pseudo !!!')
    }
    else{
      startGame()
      ringSVGSelector.style.display="block"
    }  
 })



