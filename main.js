const input = document.getElementById("input")
const qrcode = new QRCode(document.getElementById("qrcode"), " ")
const button = document.getElementById("button")

button.addEventListener("click", () => {
    qrcode.clear()
    qrcode.makeCode(input.value)
})