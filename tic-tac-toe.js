var tic= document.querySelectorAll(".tiv");
let res_btn=document.querySelector(".btn");
let container=document.querySelector(".win_msg");
let msg=document.querySelector("#msg");
let new_game=document.querySelector(".newbtn");
let trun0 = true;
let arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

tic.forEach((box) => {
    box.addEventListener("click", () =>
    {
        if(trun0)
        {
            box.innerHTML ="0";
            trun0 = false; 
        }
        else
        {
            box.innerHTML="X";
            trun0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () =>{
    trun0 = true;
    enableBoxes();
    container.classList.add("hide");
}

const enableBoxes = () =>
{
   // console.log("clicked");
    for(let box of tic)
    {
        box.disabled=false;
        box.innerText="";

    }
}
const disabledBoxes = () =>
{
    for(let box of tic)
    {
        box.disabled=true;
    }
}
const checkWinner = () =>
{
    for(var pattern of arr)
    {
        // console.log(tic[pattern[0]].innerText,tic[pattern[1]].innerText,[pattern[2]].innerText)
        let pos1 = tic[pattern[0]].innerText;
        let pos2 = tic[pattern[1]].innerText;
        let pos3 = tic[pattern[2]].innerText;
        if(pos1 !="" && pos2!= "" && pos3!="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                
                msg.innerText="Congratulations, The Winner is: "+pos1;
                container.classList.remove("hide");
                disabledBoxes();

            }
        }

    }
}

res_btn.addEventListener("click", () =>{
    resetGame();
});
new_game.addEventListener("click", ()=>
{
    resetGame();
});