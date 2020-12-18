var numsquares = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebutton = document.querySelectorAll(".mode");

init();
function init(){
    setupmodebutton();
    setupsquares();
    reset();
} 

function setupmodebutton(){
    for(var i=0; i<modebutton.length; i++){
        modebutton[i].addEventListener("click", function(){
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
            this.classList.add("selected");
           // this.textContent === "EASY" ? numsquares = 3 : numsquares = 6; use this operattor or if else..
           if(this.textContent === "EASY"){
               numsquares = 3;
           }
           else{
               numsquares = 6;
           }
            reset();
        });
    }
}

function setupsquares(){
    for(var i=0; i<squares.length ; i++){
        squares[i].addEventListener("click",function(){
    var clickedcolor = this.style.background;
    if(clickedcolor === pickedcolor){
    message.textContent= "correct";
    colorchange(clickedcolor);
    h1.style.background = clickedcolor;
    resetbutton.textContent = "PLAY AGAIN?";
    }
    else{
        this.style.background = "#232323";
    message.textContent = "try again";
    }
        });
    }
}

function reset(){
    colors = generaterandomcolor(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    message.textContent= "";
    resetbutton.textContent = "NEW COLORS"
    for(var i=0; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetbutton.addEventListener("click", function(){
        reset();    
});


function colorchange(color) {
for(var i=0; i< squares.length; i++){
    squares[i].style.background = color;
}
}

function pickcolor(){
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generaterandomcolor(num){
    var arr = []
    for(var i=0; i<num ; i++){
        arr.push(randomcolor());
    }

    return arr;
}

function randomcolor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}




//easy hard button description:
/* easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares = 3;
    colors = generaterandomcolor(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length ; i++){
if(colors[i]){
    squares[i].style.background = colors[i];
}
else{
    squares[i].style.display = "none";
}
    }

});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares = 6;
    colors = generaterandomcolor(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length ; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";

    }
}); */