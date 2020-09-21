const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement  = document.getElementById("error")
Form.addEventListener("submit", (e) =>{
    let message = []
    if (username.value ===" " || username.value === null){
        message.push("Name is required")
    }
    if (password.value.length <8){
        message.push("Password must be greater or equal 8 characters")
    }
    if (password.value.toUpperCase() ==="PASSWORD"){
        message.push("Password cannot be password")
    }
    if(message.length >0) {
        e.preventDefault()
        errorElement.innerText = message.join(", ")
    }
})
toUpper