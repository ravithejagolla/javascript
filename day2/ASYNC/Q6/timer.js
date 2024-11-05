

const currentTime=document.querySelector(".para")
const buttonParent=document.querySelector(".btn-container")

let seconds=0
let minuts=0;
let timerId;
function handlebuttonClick(event){
    const button=event.target.name;
    if(button==="start"){
        timerId=setInterval(() => {
            seconds++
            if(seconds>58){
                seconds=0
                minuts++
            }
            currentTime.innerText= `${minuts <10 ? `0${minuts}` : minuts} : ${seconds <10 ? `0${seconds}` :seconds}`
        },1000)
    }
    if(button==="stop"){
        clearInterval(timerId)
    }
    if(button==="reset"){
        clearInterval(timerId)
        seconds=minuts=0
        currentTime.innerText= `${minuts <10 ? `0${minuts}` : minuts} : ${seconds <10 ? `0${seconds}` :seconds}`
    }

}

buttonParent.addEventListener("click",handlebuttonClick)