function startclassify(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nctzbsFlZ/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        rnr=Math.floor(Math.random()*255);
        rng=Math.floor(Math.random()*255);
        rnb=Math.floor(Math.random()*255);
        document.getElementById("resultlabel").innerHTML="I can hear " + results[0].label;
        document.getElementById("resultacc").innerHTML="Accuracy is " + (results[0].confidence *100).toFixed(2);
        document.getElementById("resultlabel").style.color="rgb(" + rnr + ", " + rng + ", " + rnb + ")";
        document.getElementById("resultacc").style.color="rgb(" + rnr + ", " + rng + ", " + rnb + ")";

        if(results[0].label=="Background Noise"){}

        else if(results[0].label=="Cat"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='cat.webp' width='300' height='300'></div>"
        }

        else if(results[0].label=="Dog"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='dog.png' width='300' height='300'></div>"
        }

        else if(results[0].label=="Elephant"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='elephant.webp' width='300' height='300'></div>"
        }

        else if(results[0].label=="Horse"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='horse.png' width='300' height='300'></div>"
        }

        else if(results[0].label=="Hyena"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='hyena.jpeg' width='300' height='300'></div>"
        }

        else if(results[0].label=="Leopard"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='leopard.jpeg' width='300' height='300'></div>"
        }

        else if(results[0].label=="Lion"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='lion.jpeg' width='300' height='300'></div>"
        }

        else if(results[0].label=="Tiger"){
            document.getElementById("img").innerHTML="<div id='animalimg' src='tiger.jpeg' width='300' height='300'></div>"
        }

        else{
            document.getElementById("img").innerHTML="<div id='animalimg' src='wolf.jpeg' width='300' height='300'></div>"
        }
    }
}
