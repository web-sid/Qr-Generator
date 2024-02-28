const url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

let qrBox = document.getElementById("qr-div");
let qrImage = document.getElementById("img");
let input = document.getElementById("input");
let reset = document.getElementById("reset");

function generateQr() {
  qrImage.src = url + input.value;
}

reset.addEventListener("click", () => {
  qrImage.src = "";
  input.value = "";
});
