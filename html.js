//importing all html elements required //
var buttonHandler = document.getElementById("bttn");
var txtInput = document.getElementById("txt-input");
var outputText = document.getElementById("txt-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json"
//importing all html elements required //

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}
//getting a function for error handling//
function errorHandler(error) {
    console.log("error occured", error);
    alert("issue with server.Please try after some time!!");

}
//getting a function for the operation
function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
}
//getting a function ready to take translation url, input data, fetch it &then return the output in translated language//
buttonHandler.addEventListener("click", clickHandler);
//putting all things together//