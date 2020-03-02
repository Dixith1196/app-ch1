

function sentenceMaxLength(){
    var maxLength = 250;
    var currentLength = document.getElementById("sentence").value.length;
    console.log(currentLength, "length")

    var lengthLimit = maxLength - currentLength;

    document.getElementById("limit").innerHTML = lengthLimit
    
}