let compscore=0;
let userscore=0;
let msg=document.querySelector("#msg");
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const compchoice=()=>{
    let data=Math.floor(Math.random()*3);
    const choices=["rock","paper","scissors"];
    return choices[data];
}
const drawgame=()=>{
    msg.innerText="The game was draw";
    msg.style.background="yellow";
}
const showwinner=(userwin) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText="You win";
        msg.style.background="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText="you lose try again";
        msg.style.background="red";
    }
}


const playgame=(userchoice) => {
    console.log(userchoice);
    const compchoice1=compchoice();
    if (userchoice===compchoice1){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="scissors"){
            userwin=compchoice1==="paper"?true:false;
        }
        else if(userchoice==="rock"){
            userwin=compchoice1==="paper"?false:true;
        }
        else{
            userwin=compchoice==="scissors"?true:false;
        }
        showwinner(userwin);
    }
    
}



choices.forEach((choice)=>{
    const userchoice=choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        playgame(userchoice);
    })
});