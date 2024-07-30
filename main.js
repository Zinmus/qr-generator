var input = document.getElementById("input")
var qrcode = new QRCode(document.getElementById("qrcode"), " ")
var button = document.getElementById("button")

button.addEventListener("click", () => {
    qrcode.clear()
    qrcode.makeCode(input.value)
})