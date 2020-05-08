
var myInput = document.getElementById("input"),
    myOutput = document.getElementById("output"),
    myP = document.getElementById("qst"),
    myBtn = document.getElementById("check");
    myBtn.onclick = function(){
        if((myInput.value == "castle" )||(myInput.value == "a castle" )||(myInput.value == "the castle")){
            myOutput.innerHTML = "True";
            myOutput.style.color = "green";
            myP.style.visibility = "hidden";
        } else if (myInput.value == ""){
            myOutput.innerHTML = "write your answer";
            myOutput.style.color = "yellow";
        }
        else {
            myOutput.innerHTML = "False: It's a castle";
            myOutput.style.color = "red";
            myP.style.visibility = "visible";
        }
    }
    // container appl
    var myInputAppel = document.getElementById("inputAppel"),
    myOutputAppel = document.getElementById("outputAppel"),
    myPAppel = document.getElementById("qst"),
    myBtnAppel = document.getElementById("checkAppel");
    myBtnAppel.onclick = function(){
        if((myInputAppel.value == "appel" )||(myInputAppel.value == "an appel" )){
            myOutputAppel.innerHTML = "True";
            myOutputAppel.style.color = "green";
            myP.style.visibility = "hidden";
        } else if (myInputAppel.value == ""){
            myOutputAppel.innerHTML = "write your answer";
            myOutputAppel.style.color = "yellow";
        }
        else {
            myOutputAppel.innerHTML = "False: It's an appel";
            myOutputAppel.style.color = "red";
            myPAppel.style.visibility = "visible";
        }
    }
    // container appl
    // container orange
    var myInputOrange = document.getElementById("inputOrange"),
    myOutputOrange = document.getElementById("outputOrange"),
    myPOrange = document.getElementById("qstOrange"),
    myBtnOrange = document.getElementById("checkOrange");
    myBtnOrange.onclick = function(){
        if((myInputOrange.value == "orange" )||(myInputOrange.value == "an orange" )){
            myOutputOrange.innerHTML = "True";
            myOutputOrange.style.color = "green";
            myPOrange.style.visibility = "hidden";
        } else if (myInputOrange.value == ""){
            myOutputOrange.innerHTML = "write your answer";
            myOutputOrange.style.color = "yellow";
        }
        else {
            myOutputOrange.innerHTML = "False: It's an orange";
            myOutputOrange.style.color = "red";
            myPOrange.style.visibility = "visible";
        }
    }
    // container orange
    // container bird
    var myInputBird = document.getElementById("inputBird"),
    myOutputBird = document.getElementById("outputBird"),
    myPBird = document.getElementById("qstBird"),
    myBtnBird = document.getElementById("checkBird");
    myBtnBird.onclick = function(){
        if((myInputBird.value == "bird" )||(myInputBird.value == "the bird" )){
            myOutputBird.innerHTML = "True";
            myOutputBird.style.color = "green";
            myPBird.style.visibility = "hidden";
        } else if (myInputBird.value == ""){
            myOutputBird.innerHTML = "write your answer";
            myOutputBird.style.color = "yellow";
        }
        else {
            myOutputBird.innerHTML = "False: It's a bird";
            myOutputBird.style.color = "red";
            myPBird.style.visibility = "visible";
        }
    }
    // container bird
    // container fish 
    var myInputFish = document.getElementById("inputFish"),
    myOutputFish = document.getElementById("outputFish"),
    myPFish = document.getElementById("qstBird"),
    myBtnOrange = document.getElementById("checkFish");
    myBtnOrange.onclick = function(){
        if((myInputFish.value == "a fish" )||(myInputFish.value == "the fish" )){
            myOutputFish.innerHTML = "True";
            myOutputFish.style.color = "green";
            myPFish.style.visibility = "hidden";
        } else if (myInputFish.value == ""){
            myOutputFish.innerHTML = "write your answer";
            myOutputFish.style.color = "yellow";
        }
        else {
            myOutputFish.innerHTML = "False: It's a fish";
            myOutputFish.style.color = "red";
            myPFish.style.visibility = "visible";
        }
    }
    // container fish 
   


    // Hadi fonction kat3tiha f parametre max o katreturni lk nombre men 0 hta lmax li 3titih
 function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      //Kanjbed element parent b className o kandir [0] hit imken ikon kter mn classe whda b dik smia
     let tab=document.getElementsByClassName("parent")[0]; 
     // Kentreturni Text dyal wahd child b indice li ghatreturnih dik fonction li saybt 
      tab.children[getRandomInt(5)].setAttribute("class" , "done");
     // kanAfficher f wahd div kharja mne parent : 
    



     var btnNext = document.querySelector('.next'),
        classListNext = ["appelNext", "orangeNext", "birdNext", "fishNext", "bearNext"],
        randomNext = Math.floor(Math.random() * classListNext.length);
        btnNext.onclick = function(){
            document.getElementById("container").setAttribute("class", randomNext[classListNext])
        }

    var text = document.querySelector('h1'),
        textCntnt = "Learn English",
        i = 0;
    window.onload = function(){
        var writer = setInterval(function(){
            text.textContent += textCntnt[i];
            i = i + 1;
            if (i >textCntnt.length -1){
                clearInterval(writer);
            } if (textCntnt[1]){
                text.style.color = "blue"
            }
        },200)
    }
    
