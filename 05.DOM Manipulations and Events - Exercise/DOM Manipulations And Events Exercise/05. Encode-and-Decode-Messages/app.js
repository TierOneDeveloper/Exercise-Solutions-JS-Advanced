function encodeAndDecodeMessages() {
    const sendBtn = document.querySelector("#main div button");
    const readBtn = document.querySelector("#main div:nth-child(2) button");

    const textInput = document.querySelector("#main div textarea");
    const readOutput = document.querySelector("#main div:nth-child(2) textarea");

    sendBtn.addEventListener("click", encodeSend);
    readBtn.addEventListener("click", decodeRead);

    function encodeSend() {
        let msgToEncode = textInput.value;
        let msgArray = msgToEncode
            .split("")
            .map(el => el.charCodeAt())
            .map(el => el + 1)
            .map(el => String.fromCharCode(el))
            .join("");

        readOutput.value = msgArray;
        textInput.value = "";
    }

    function decodeRead() {
        let msgToDecode = readOutput.value;
        let msgArray = msgToDecode
            .split("")
            .map(el => el.charCodeAt())
            .map(el => el - 1)
            .map(el => String.fromCharCode(el))
            .join("");

        readOutput.value = msgArray;
    }
}