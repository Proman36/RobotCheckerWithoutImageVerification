var deg = document.getElementsByClassName("degree")
var value = document.getElementsByClassName("valueEntered")
var randomNum = Math.floor(Math.random() * 361)
var reset = document.getElementById("reset")
var degVal = document.getElementById("deg")
var textVal = value[0].value
degVal.innerText = randomNum
var main = document.getElementById("main")
var changeSite = false
var txt = document.getElementById("txt")
var submit = document.getElementById("submit")
localStorage.setItem("changesite", false)
reset.addEventListener('click', ()=>{
    deg[0].style.transform = "rotate(0deg)"
    value[0].value = ""
    deg[0].style.backgroundColor = "orange"
    randomNum = Math.floor(Math.random() * 361)
    degVal.innerText = randomNum
    textVal = ""
})
  
value[0].addEventListener('input', ()=>{
    var rot = value[0].value
    console.log(rot)
    var marg = rot/360*0.5*30
    deg[0].style.marginTop = marg+"vh"
    deg[0].style.marginBottom = marg+"vh"
    deg[0].style.transform = "rotate("+value[0].value+"deg)"
    textVal = value[0].value
    if(textVal == randomNum){
        deg[0].style.backgroundColor = "green"
        txt.innerText = "Correct"
    }
    else{
        deg[0].style.backgroundColor = "red"
        txt.innerText = "Wrong"
    }
})
submit.addEventListener('click', ()=>{
    localStorage.setItem("changesite", true)
    window.location.href = "content.html"
})
