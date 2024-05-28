
let userPoint=0, compPoint=0,rand
let userInput=0
const userpt=document.querySelector("#userPoint")
const comppt=document.querySelector("#compPoint")
const display=document.querySelector("#display")
const start=document.querySelector("#start")
const input=document.querySelector(".input")
const rock=document.querySelector("#rock")
const paper=document.querySelector("#paper")
const scissor=document.querySelector("#scissor")
start.addEventListener("click",function(){
    start.setAttribute("hidden","")
    input.style="display: flex"
    rand=randomNumebr()
    startGame(rand)
})
function randomNumebr(){
    return Math.floor(Math.random()*3+1)
}
async function startGame(rand){
    await takeUserInput()
    console.log(`User: ${userInput}`)
    console.log(`Computer ${rand}`)
    if(rand==1){
        if(userInput==1){
            display.innerHTML=`You Chose Rock and Computer Chose Rock`
        }
        else if(userInput==2){
            userPoint++
            updateResult()
            display.innerHTML=`You Chose Paper and Computer Chose Rock`
        }
        else {
            compPoint++
            updateResult()
            display.innerHTML=`You Chose Scissor and Computer Chose Rock`
        }
    }
    else if(rand==2){
        if(userInput==2){
            display.innerHTML=`You Chose Paper and Computer Chose Paper`
        }
        else if(userInput==3){
            userPoint++
            updateResult()
            display.innerHTML=`You Chose Scissor and Computer Chose Paper`
        }
        else {
            compPoint++
            updateResult()
            display.innerHTML=`You Chose Rock and Computer Chose Paper`
        }
    }
    else{
        if(userInput==3){
            display.innerHTML=`You Chose Scissor and Computer Chose Scissor`
        }
        else if(userInput==1){
            userPoint++
            updateResult()
            display.innerHTML=`You Chose Rock and Computer Chose Scissor`
        }
        else {
            compPoint++
            updateResult()
            display.innerHTML=`You Chose Paper and Computer Chose Scissor`
        }
    }
    reloadgame()
}
function takeUserInput(){
    // rock.removeAttribute("disabled")
    // paper.removeAttribute("disabled")
    // scissor.removeAttribute("disabled")
  return new Promise((resolve, reject) => {
    rock.addEventListener("click",function(){
        userInput=1
        resolve()
    })
    paper.addEventListener("click",function(){
        userInput=2
        resolve()
    })
    scissor.addEventListener("click",function(){
        userInput=3
        resolve()
    })
  })
}
function reloadgame(){
    rand=randomNumebr()
    startGame(rand)
}
function updateResult(){
    userpt.innerHTML=`${userPoint}`
    comppt.innerHTML=`${compPoint}`
}
