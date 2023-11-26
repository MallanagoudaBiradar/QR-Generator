let getImage = document.getElementById("imgbox");
let getQR = document.getElementById("qrimg");
let qrText = document.getElementById("qrtext");


function genQr(){
    getQR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

}