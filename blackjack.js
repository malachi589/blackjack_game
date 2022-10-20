const blackjackhit = document.querySelector('#blackjackhit-button');
const blackjackstand = document.querySelector('#blackjackstand-button');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const blackjackdeal = document.querySelector('#blackjackdeal-button');
const yourbox = document.querySelector('.your-box');
const dealerbox = document.querySelector('.dealer-box');
const yourblackjackresult = document.querySelector('.yourblackjack-result');
const compblackjackresult = document.querySelector('.compblackjack-result');
const blackjackresultnotify = document.querySelector('.blackjack-result-notify');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const draws = document.querySelector('.draws');
const btnexit = document.querySelector('.btn-exit');
const hitsound = new Audio('music/mixkit-martial-arts-fast-punch-2047.wav');
const winsound = new Audio('music/mixkit-animated-small-group-applause-523.wav');
const losssound = new Audio('music/Booing-A1-www.fesliyanstudios.com.mp3');
let images = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'J', 'K'];
let imagesNum = {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'K':10, 'Q':10, 'A':[1,11]}
let Score = {'score':0, 'dealer-score': 0, 'wins':0, 'losses':0, 'draws':0}

blackjackhit.addEventListener('click', () =>{
    let imageString = imageFunction()
    imageAppear(imageString)
    scoreAppear(imageString)
    yellow.classList.add('standstop');
    hitsound.play()
})
function imageFunction() {
  let imageRandom = Math.floor(Math.random() * images.length)
  return images[imageRandom] 
}



const imageAppear = (imageString) =>{
  if (Score.score <= 21) {
    console.log(imageString);
    let image = document.createElement('img')
    image.src = `./images/${imageString}.jpg`
    yourbox.appendChild(image);
  }
   
    
    
}
const scoreAppear = (imageString) =>{


if (imageString === 'A') {
  if (Score.score + imagesNum[imageString][1] <= 21) {                                                                                                                                 
    Score.score += imagesNum[imageString][1]
  }else{
    Score.score += imagesNum[imageString][0]
  }
}else{
  Score.score += imagesNum[imageString]
}
if (Score.score > 21) {
  yourblackjackresult.textContent = 'BUST!!!'
  yourblackjackresult.style.color = 'red'
}else{
  yourblackjackresult.textContent = Score.score
}
}

blackjackstand.addEventListener('click', () =>{
  counter = setInterval(() => {
    if (Score["dealer-score"] < 16) {
      let imageString = imageFunction()
    DealerAppear(imageString);
    dealerScoreAppear(imageString);
    hitsound.play()
    }
  }, 1000);
   
   setTimeout(() => {
      ShowResult()
   }, 5000); 
  yellow.classList.remove('standstop');
  blue.classList.add('btnstop');
  
  // console.log('you');
})


const DealerAppear = (imageString) =>{
  if (Score["dealer-score"] <= 21) {
    console.log(imageString);
    let image = document.createElement('img')
    image.src = `./images/${imageString}.jpg`
    dealerbox.appendChild(image);
  }
    

}
const dealerScoreAppear = (imageString) =>{


  if (imageString === 'A') {
    if (Score["dealer-score"] + imagesNum[imageString][1] <= 21) {                                                                                                                                 
      Score["dealer-score"] += imagesNum[imageString][1]
    }else{
      Score["dealer-score"] += imagesNum[imageString][0]
    }
  }else{
    Score["dealer-score"] += imagesNum[imageString]
  }
  if (Score["dealer-score"] > 21) {
    compblackjackresult.textContent = 'BUST!!!'
    compblackjackresult.style.color = 'red'
  }else{
    compblackjackresult.textContent = Score["dealer-score"]
  }
}

const ShowResult = ()=>{
  let winner;
  let loser;
  let draw;
  if (Score.score <= 21) {
    if (Score.score > Score["dealer-score"] || Score["dealer-score"] > 21) {
      winner = 'you win'
      blackjackresultnotify.textContent = winner
      blackjackresultnotify.style.color = 'green';
      Score.wins++
      wins.textContent = Score.wins
      winsound.play()
    } else if (Score.score < Score["dealer-score"]) {
      loser = 'you lose'
      blackjackresultnotify.textContent = loser
      blackjackresultnotify.style.color = 'red'
      Score.losses++
      losses.textContent = Score.losses
      losssound.play()
    } else if (Score.score === Score["dealer-score"]) {
      draw = 'you draw'
      blackjackresultnotify.textContent = draw
      blackjackresultnotify.style.color = 'brown'
      Score.draws++
      draws.textContent = Score.draws

    }
  } else if (Score.score > 21 && Score["dealer-score"] <= 21) {
    loser = 'you lose'
    blackjackresultnotify.textContent = loser
    blackjackresultnotify.style.color = 'red'
    Score.losses++
    losses.textContent = Score.losses
    losssound.play()
  } else if (Score.score > 21 && Score["dealer-score"] > 21) {
    draw = 'you draw'
    blackjackresultnotify.textContent = draw
    blackjackresultnotify.style.color = 'brown'
    Score.draws++
    draws.textContent = Score.draws
  }
  // console.log(winner);
  
  
}


blackjackdeal.addEventListener('click', () =>{
  let yourboxChildren = yourbox.querySelectorAll('img')
  let dealerboxChildren = dealerbox.querySelectorAll('img')
  for (let i = 0; i < yourboxChildren.length; i++) {
    yourboxChildren[i].remove();
    
  }
  for (let i = 0; i < dealerboxChildren.length; i++) {
    dealerboxChildren[i].remove();
    
  }
  Score.score = 0
  Score["dealer-score"] = 0
  clearInterval(counter);
  // clearInterval(count);
  yourblackjackresult.textContent = 0
  yourblackjackresult.style.color = 'white'
  compblackjackresult.textContent = 0
  compblackjackresult.style.color = 'white'
  blackjackresultnotify.textContent = "let's play"
  blackjackresultnotify.style.color = "white"
  blue.classList.remove('btnstop');
  yellow.classList.remove('standstop');
})
btnexit.addEventListener('click', ()=>{
  window.location.assign('blackjackstart.html')
})


