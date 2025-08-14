const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// console.log(characters.length)

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")

let passwordLength = 0
let toogleValue = true

function getToogleValue() {
    const includeNumsSymbols = document.getElementById("special-toogle")
     toogleValue = includeNumsSymbols.checked
}

function storePasswordLength(){
    const inputlengthEl = document.getElementById("password-Length")
     passwordLength = inputlengthEl.value
}

function generatePassword(){
    getToogleValue()
    storePasswordLength()
    passwordEl1.textContent = " "
    passwordEl2.textContent = " "
    for(let i=0;i<passwordLength;i++){
        generate()
    }
}

function generate() {
                 
         if( toogleValue === false){
            passwordEl1.textContent += characters[Math.floor(Math.random()* (91 - 40))] // numbers 
            passwordEl2.textContent += characters[Math.floor(Math.random()* (91 - 40))]
         }
         else{
            passwordEl1.textContent += characters[Math.floor(Math.random()* 91)]
            passwordEl2.textContent += characters[Math.floor(Math.random()* 91)]
         }
         
}



