var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.onresult[0][0].transcript;

    document.getElementById("textbbox").innerHTML = Content;
    console.log(Content);
    speak();

}

function speak(){

    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    
     Webcam.attach(camera);

}

Webcam.set({
    width: 360,
    height: 240,
    image_format: 'jpg',
    jpg_quality: 90
 });

 camera = document.getElementById("camera");