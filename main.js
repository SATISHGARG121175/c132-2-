Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version',ml5.vrsion);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/model.jason',modelLoaded");
function modelLoaded(){
    console.log("modelLoaded");
}
function captured_image()
{
 img=document.getElementById('captured_image');
 classifier.classify(img, gotResult);
}
function gotResult(error,results) {
    if(error) {
    console.error(error);
} else{
    console.log(results);
    document.getElementById("webcam").innerHTML=results[0].label;
    document.getElementById("snapshot").innerHTML=results[0].confidence.toFixed(3);
}
}
