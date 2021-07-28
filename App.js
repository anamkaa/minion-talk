var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function urlGenerator(input) {
    return url + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("Error occured.", error);
    alert("Some error has ocurred, Try after sometime.");
}

function clickHandler() {
    // console.log("button clicked");
    // console.log("input:"+textInput.value);
    // textOutput.innerText = "Output: "+textInput.value;
    var inputText = textInput.value;
    fetch(urlGenerator(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })


        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
// textInput.addEventListener("onclick", clickHandler);