                    //Math in JS
// let a = 1
// alert(-a)// унарный минус
// console.log(-a)
// let b = 2 
// let c = 4
// alert(b * c)
// alert(b + c)
// alert(b - c)
// alert(b / c)
// alert(b ** c)







// Увеличение , уменшение НА. Увеличение ,уменшение В.
// let message = "Я изучаю js" 
//     message += ", я стану крутым программистом"

// alert(message) 
// let nool = 5
    // nool += 3
// console.log(nool)
    // nool -= 10
// console.log(nool)
//     nool *= 5
// console.log(nool)
//     nool /= 5
// console.log(nool)
// alert("1" + 1)
// alert(2 + 2 + 3 + "4")
// alert("25px")

// let nool = 5
//     nool +=3
//     nool -=3
//     nool *= 2
// console.log(nool)

// let minys = 10
//     minys -=5
// console.log(minys)




let text = document.querySelector("h1")
let buttonCreated = document.getElementById("button")
let divBackground = document.getElementById("div")
let divDisplay = document.querySelector(".block")

function Created(){
    text.style.color = "red"
    divBackground.style.backgroundColor = "green"
    divDisplay.style.display = "block"
    text.style.textAlign = "center"
}
buttonCreated.addEventListener("click", Created)