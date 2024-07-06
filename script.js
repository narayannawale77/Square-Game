let s1 = document.getElementById("square1")
s1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random() * 100)
    s1.innerHTML = `<h1>${r}</h1>`
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML = `<h1>1</h1>`
})

let s2 = document.getElementById("square2")
let flag = true
s2.addEventListener("mouseenter", function(){
    if(flag == true){
        s2.style.backgroundColor = "red"
        flag = false
    }
    else{
        s2.style.backgroundColor = "green"
        flag = true
    }
})
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor = "white"
})

// for square 3
let s3 = document.getElementById("square3")
s3.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random() * (250  - 0) + 1) + 0
    let g = Math.floor(Math.random() * (250  - 0) + 1) + 0
    let b = Math.floor(Math.random() * (250  - 0) + 1) + 0

    s3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor = "white"
})

let s4 = document.getElementById("square4")
s4.addEventListener("click", function(){
    let r = Math.floor(Math.random() * (250  - 0) + 1) + 0
    let g = Math.floor(Math.random() * (250  - 0) + 1) + 0
    let b = Math.floor(Math.random() * (250  - 0) + 1) + 0
    s1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    s2.style.backgroundColor = `rgb(${b}, ${r}, ${g})`
    s3.style.backgroundColor = `rgb(${g}, ${b}, ${r})`
})
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor = "white"
    s2.style.backgroundColor = "white"
    s3.style.backgroundColor = "white"
    s4.style.backgroundColor = "white"
})


//code for crsur
let main = document.getElementById("main")
let crsur = document.getElementById("crsur")
main.addEventListener("mousemove", function(dets){
    crsur.style.left = dets.x + "px"
    crsur.style.top = dets.y + "px"
})
