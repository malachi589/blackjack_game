const blackjackhitA = document.querySelector('#blackjackhitA-button');
const blackjackhitB = document.querySelector('#blackjackhitB-button');
const playerAbox = document.querySelector('.playera-box');
const playerBbox = document.querySelector('.playerb-box');
const PlayerAblackjackresult = document.querySelector('.PlayerAblackjack-result');
const PlayerBblackjackresult = document.querySelector('.PlayerBblackjack-result');
const blackjackdeal = document.querySelector('#blackjackdeal-button');
const notifycontainer = document.querySelector('.notify-container');
const notifywords = document.querySelector('.notify-words');
const playerAwin = document.querySelector('.A-win');
const playerBwin = document.querySelector('.B-win');
const blackjackhitstand = document.querySelector('#blackjackSTAND-button')
const blueplayerA = document.querySelector('.blue-playerA');
const blueplayerB = document.querySelector('.blue-playerB');
const green = document.querySelector('.green');
const btnexit = document.querySelector('.btn-exit');
let images = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'J', 'K'];
let imagesNum = {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'K':10, 'Q':10, 
'A':[1,11]};
let Score = {'score':0, 'dealer-score': 0, 'winsA':0, 'winsB':0, 'draws':0}
const hitsound = new Audio('music/mixkit-martial-arts-fast-punch-2047.wav');



blackjackhitA.addEventListener('click', () => {
    hitsound.play()
    let imageString = imageFunction()
    imageAppear(imageString)
    scoreAppear(imageString)
    blueplayerB.classList.add('disable');
    if(Score.score >= 11){
        blueplayerB.classList.remove('disable')
    }
})

function imageFunction() {
    let imageRandom = Math.floor(Math.random() * images.length)
    return images[imageRandom] 
}
  
  
  
const imageAppear = (imageString) =>{
if (Score.score <= 21){
    // blueplayerB.classList.add('disable');
    console.log(imageString);
    let image = document.createElement('img')
    image.src = `./images/${imageString}.jpg`
    playerAbox.appendChild(image);
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
    PlayerAblackjackresult.textContent = 'BUST!!!'
    PlayerAblackjackresult.style.color = 'red'
}else{
    PlayerAblackjackresult.textContent = Score.score
}
}
blackjackhitB.addEventListener('click', () => {
        let imageString = imageFunction()
        PlayerbAppear(imageString)
        scoreBAppear(imageString)
        blueplayerA.classList.add('disable');
        if(Score["dealer-score"] >= 11){
            blueplayerA.classList.remove('disable')
        }
    // blueplayerA.classList.add('disable');
})
const PlayerbAppear = (imageString) =>{
    if (Score["dealer-score"] <= 21){
        // blueplayerA.classList.add('disable');
        console.log(imageString);
        let image = document.createElement('img')
        image.src = `./images/${imageString}.jpg`
        playerBbox.appendChild(image);
    }
}
const scoreBAppear = (imageString) =>{


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
        PlayerBblackjackresult.textContent = 'BUST!!!'
        PlayerBblackjackresult.style.color = 'red'
    }else{
        PlayerBblackjackresult.textContent = Score["dealer-score"]
    }
}

blackjackdeal.addEventListener('click', () =>{
    let dealerAboxChildren = playerAbox.querySelectorAll('img')
    let dealerBboxChildren = playerBbox.querySelectorAll('img')
    for (let i = 0; i < dealerAboxChildren.length; i++) {
      dealerAboxChildren[i].remove();
      
    }
    for (let i = 0; i < dealerBboxChildren.length; i++) {
      dealerBboxChildren[i].remove();
      
    }
    Score.score = 0
    Score["dealer-score"] = 0
    PlayerAblackjackresult.textContent = 0
    PlayerAblackjackresult.style.color = 'white'
    PlayerBblackjackresult.textContent = 0
    PlayerBblackjackresult.style.color = 'white'
    blueplayerA.classList.remove('disable');
    blueplayerB.classList.remove('disable');
    green.classList.remove('disable');
  })
  blackjackhitstand.addEventListener('click', () =>{
    ShowResult();
    green.classList.add('disable');
  })

  const ShowResult = ()=>{
    if (Score.score <= 21) {
      if (Score.score > Score["dealer-score"] || Score["dealer-score"] > 21) {
            notifycontainer.style.display = 'block'
            notifywords.textContent = 'PLAYER A WON'
            setTimeout(() => {
                notifycontainer.style.display = 'none' 
            }, 2000); 
        Score.winsA++
        playerAwin.textContent = Score.winsA
      } else if (Score.score < Score["dealer-score"]) {
            notifycontainer.style.display = 'block'
            notifywords.textContent = 'PLAYER B WON'
            setTimeout(() => {
                notifycontainer.style.display = 'none'
            }, 2000); 
        Score.winsB++
        playerBwin.textContent = Score.winsB
      } else if (Score.score === Score["dealer-score"]) {
            notifycontainer.style.display = 'block'
            notifywords.textContent = 'PLAYER A AND PLAYER B DREW'  
            setTimeout(() => {
                notifycontainer.style.display = 'none'
            }, 2000);
  
      }
    } else if (Score.score > 21 && Score["dealer-score"] <= 21) {
            notifycontainer.style.display = 'block'
            notifywords.textContent = 'PLAYER B WON'
            setTimeout(() => {
                notifycontainer.style.display = 'none'
            }, 2000);
        Score.winsB++
        playerBwin.textContent = Score.winsB
    } else if (Score.score > 21 && Score["dealer-score"] > 21) {
            notifycontainer.style.display = 'block'
            notifywords.textContent = 'PLAYER A AND PLAYER B DREW'
            setTimeout(() => {
                notifycontainer.style.display = 'none' 
            }, 2000);

      
    }
    // console.log(winner);
    
    
  }
  btnexit.addEventListener('click', ()=>{
    window.location.assign('blackjackstart.html')
  })
  