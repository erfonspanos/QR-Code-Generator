const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")
// Eventos

// Gerar QR Code
function generateQrCode(){

    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return

    qrCodeBtn.innerText = "Generating Code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Successfully Generated!"
    })

}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});

// Resetar area do QR Code
qrCodeInput.addEventListener("keyup", () => {

    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Generate QR Code"
    }
})