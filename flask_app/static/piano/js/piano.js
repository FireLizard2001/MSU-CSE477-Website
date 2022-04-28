const sound = {65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
                87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
                83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
                69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
                68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
                70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
                84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
                71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
                89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
                72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
                85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
                74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
                75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
                79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
                76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
                80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
                186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"};

const creep = "https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1";

var prev = null;

const great = document.getElementsByClassName('great')[0];
const awake = document.getElementsByClassName('awake')[0];
const pianoBack = document.getElementsByClassName('pianoBack')[0];
const keys = document.getElementsByClassName('keys')[0];

const noteA = document.getElementsByClassName('white')[0];
const noteS = document.getElementsByClassName('white')[1];
const noteD = document.getElementsByClassName('white')[2];
const noteF = document.getElementsByClassName('white')[3];
const noteG = document.getElementsByClassName('white')[4];
const noteH = document.getElementsByClassName('white')[5];
const noteJ = document.getElementsByClassName('white')[6];
const noteK = document.getElementsByClassName('white')[7];
const noteL = document.getElementsByClassName('white')[8];
const noteCol = document.getElementsByClassName('white')[9];


const noteW = document.getElementsByClassName('black')[0];
const noteE = document.getElementsByClassName('black')[1];
const noteT = document.getElementsByClassName('black')[2];
const noteY = document.getElementsByClassName('black')[3];
const noteU = document.getElementsByClassName('black')[4];
const noteO = document.getElementsByClassName('black')[5];
const noteP = document.getElementsByClassName('black')[6];

document.addEventListener('keydown', function(e) {
    if (prev !== "Weseeyou")
    {

        if (e.key === "w") {
            var element = noteW;
        }
        if (e.key === "e") {
            var element = noteE;
        }
        if (e.key === "t") {
            var element = noteT;
        }
        if (e.key === "y") {
            var element = noteY;
        }
        if (e.key === "u") {
            var element = noteU;
        }
        if (e.key === "o") {
            var element = noteO;
        }
        if (e.key === "p") {
            var element = noteP;
        }
        if (e.key === "a") {
            var element = noteA;
        }
        if (e.key === "s") {
            var element = noteS;
        }
        if (e.key === "d") {
            var element = noteD;
        }
        if (e.key === "f") {
            var element = noteF;
        }
        if (e.key === "g") {
            var element = noteG;
        }
        if (e.key === "h") {
            var element = noteH;
        }
        if (e.key === "j") {
            var element = noteJ;
        }
        if (e.key === "k") {
            var element = noteK;
        }
        if (e.key === "l") {
            var element = noteL;
        }
        if (e.key === ";") {
            var element = noteCol;
        }

        element.style.opacity = "0.8";

        var audio = new Audio(sound[e.keyCode]);
        audio.play();
        if (e.keyCode === 87) {
            prev = "W";
        } else if (prev === 'W' && e.keyCode === 69) {
            prev = "We";
        } else if (prev === "We" && e.keyCode === 83) {
            prev = "Wes";
        } else if (prev === "Wes" && e.keyCode === 69) {
            prev = "Wese";
        } else if (prev === "Wese" && e.keyCode === 69) {
            prev = "Wesee";
        } else if (prev === "Wesee" && e.keyCode === 89) {
            prev = "Weseey";
        } else if (prev === "Weseey" && e.keyCode === 79) {
            prev = "Weseeyo";
        } else if (prev === "Weseeyo" && e.keyCode === 85) {
            prev = "Weseeyou";
            audio = new Audio(creep);
            audio.play();
            great.classList.add("disappear");
            awake.classList.add("appear");
            pianoBack.classList.add("handleback");
            keys.classList.add("disappear");
        } else {
            prev = null;
        }
    }
});

document.addEventListener('keyup', function(e) {
   
        if (e.key === "w") {
            var element = noteW;
        }
        if (e.key === "e") {
            var element = noteE;
        }
        if (e.key === "t") {
            var element = noteT;
        }
        if (e.key === "y") {
            var element = noteY;
        }
        if (e.key === "u") {
            var element = noteU;
        }
        if (e.key === "o") {
            var element = noteO;
        }
        if (e.key === "p") {
            var element = noteP;
        }
        if (e.key === "a") {
            var element = noteA;
        }
        if (e.key === "s") {
            var element = noteS;
        }
        if (e.key === "d") {
            var element = noteD;
        }
        if (e.key === "f") {
            var element = noteF;
        }
        if (e.key === "g") {
            var element = noteG;
        }
        if (e.key === "h") {
            var element = noteH;
        }
        if (e.key === "j") {
            var element = noteJ;
        }
        if (e.key === "k") {
            var element = noteK;
        }
        if (e.key === "l") {
            var element = noteL;
        }
        if (e.key === ";") {
            var element = noteCol;
        }

        element.style.opacity = "1";
});

noteA.addEventListener('mousedown', () => {
    prev = null;
    noteA.style.opacity = "0.8";
    var audio = new Audio(sound[65]);
    audio.play();
});

noteA.addEventListener('mouseup', () => {
    noteA.style.opacity = "1";
});

noteS.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
        if (prev === "We"){
            prev = "Wes";
        }else{
            prev = null;
        }
        noteS.style.opacity = "0.8";
        var audio = new Audio(sound[83]);
        audio.play();
    }
});

noteS.addEventListener('mouseup', () => {
    noteS.style.opacity = "1";
});

noteD.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteD.style.opacity = "0.8";
    var audio = new Audio(sound[68]);
    audio.play();
    }
});

noteD.addEventListener('mouseup', () => {
    noteD.style.opacity = "1";
});

noteF.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteF.style.opacity = "0.8";
    var audio = new Audio(sound[70]);
    audio.play();
    }
});

noteF.addEventListener('mouseup', () => {
    noteF.style.opacity = "1";
});

noteG.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteG.style.opacity = "0.8";
    var audio = new Audio(sound[71]);
    audio.play();
    }
});

noteG.addEventListener('mouseup', () => {
    noteG.style.opacity = "1";
});

noteH.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteH.style.opacity = "0.8";
    var audio = new Audio(sound[72]);
    audio.play();
    }
});

noteH.addEventListener('mouseup', () => {
    noteH.style.opacity = "1";
});

noteJ.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteJ.style.opacity = "0.8";
    var audio = new Audio(sound[74]);
    audio.play();
    }
});

noteJ.addEventListener('mouseup', () => {
    noteJ.style.opacity = "1";
});

noteK.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteK.style.opacity = "0.8";
    var audio = new Audio(sound[75]);
    audio.play();
    }
});

noteK.addEventListener('mouseup', () => {
    noteK.style.opacity = "1";
});

noteL.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteL.style.opacity = "0.8";
    var audio = new Audio(sound[76]);
    audio.play();
    }
});

noteL.addEventListener('mouseup', () => {
    noteL.style.opacity = "1";
});

noteCol.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteCol.style.opacity = "0.8";
    var audio = new Audio(sound[186]);
    audio.play();
    }
});

noteCol.addEventListener('mouseup', () => {
    noteCol.style.opacity = "1";
});

noteW.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    if (prev === null){
        prev = "W";
    }else{
        prev = null;
    }
    noteW.style.opacity = "0.8";
    var audio = new Audio(sound[87]);
    audio.play();
    }
});

noteW.addEventListener('mouseup', () => {
    noteW.style.opacity = "1";
});

noteE.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    if (prev === "W"){
        prev = "We";
    }else if (prev === "Wes"){
        prev = "Wese";
    }else if (prev === "Wese"){
        prev = "Wesee";
    }else{
        prev = null;
    }
    noteE.style.opacity = "0.8";
    var audio = new Audio(sound[69]);
    audio.play();
    }
});

noteE.addEventListener('mouseup', () => {
    noteE.style.opacity = "1";
});

noteT.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteT.style.opacity = "0.8";
    var audio = new Audio(sound[84]);
    audio.play();
    }
});

noteT.addEventListener('mouseup', () => {
    noteT.style.opacity = "1";
});

noteY.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    if (prev === "Wesee"){
        prev = "Weseey";
    }else{
        prev = null;
    }
    noteY.style.opacity = "0.8";
    var audio = new Audio(sound[89]);
    audio.play();
    }
});

noteY.addEventListener('mouseup', () => {
    noteY.style.opacity = "1";
});

noteU.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    if (prev === "Weseeyo"){
        prev = "Weseeyou";
        audio = new Audio(creep);
        audio.play();
        great.classList.add("disappear");
        awake.classList.add("appear");
        pianoBack.classList.add("handleback");
        keys.classList.add("disappear");
    }else{
        prev = null;
    }
    noteU.style.opacity = "0.8";
    var audio = new Audio(sound[85]);
    audio.play();
    }
});

noteU.addEventListener('mouseup', () => {
    noteU.style.opacity = "1";
});

noteO.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    if (prev === "Weseey"){
        prev = "Weseeyo";
    }else{
        prev = null;
    }
    noteO.style.opacity = "0.8";
    var audio = new Audio(sound[79]);
    audio.play();
    }
});

noteO.addEventListener('mouseup', () => {
    noteO.style.opacity = "1";
});

noteP.addEventListener('mousedown', () => {
    if (prev !== "Weseeyou")
    {
    prev = null;
    noteP.style.opacity = "0.8";
    var audio = new Audio(sound[80]);
    audio.play();
    }
});

noteP.addEventListener('mouseup', () => {
    noteP.style.opacity = "1";
});

noteA.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteA.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteS.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteS.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteD.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteD.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteF.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteF.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteG.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteG.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})
noteH.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteH.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteJ.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteJ.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteK.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteK.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteL.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteL.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteCol.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteCol.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteW.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteW.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteE.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteE.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteT.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteT.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteY.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteY.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteU.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteU.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteO.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteO.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})

noteP.addEventListener('mouseenter', () => {
	noteA.style.color = "#000000";
    noteS.style.color = "#000000";
    noteD.style.color = "#000000";
    noteF.style.color = "#000000";
    noteG.style.color = "#000000";
    noteH.style.color = "#000000";
    noteJ.style.color = "#000000";
    noteK.style.color = "#000000";
    noteL.style.color = "#000000";
    noteCol.style.color = "#000000";

    noteW.style.color = "#ffffff";
    noteE.style.color = "#ffffff";
    noteT.style.color = "#ffffff";
    noteY.style.color = "#ffffff";
    noteU.style.color = "#ffffff";
    noteO.style.color = "#ffffff";
    noteP.style.color = "#ffffff";
})

noteP.addEventListener('mouseleave', () => {
	noteA.style.color = "#ffffff";
    noteS.style.color = "#ffffff";
    noteD.style.color = "#ffffff";
    noteF.style.color = "#ffffff";
    noteG.style.color = "#ffffff";
    noteH.style.color = "#ffffff";
    noteJ.style.color = "#ffffff";
    noteK.style.color = "#ffffff";
    noteL.style.color = "#ffffff";
    noteCol.style.color = "#ffffff";

    noteW.style.color = "#050139";
    noteE.style.color = "#050139";
    noteT.style.color = "#050139";
    noteY.style.color = "#050139";
    noteU.style.color = "#050139";
    noteO.style.color = "#050139";
    noteP.style.color = "#050139";
})