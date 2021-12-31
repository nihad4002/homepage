let slider = document.querySelectorAll(".about00")
let prevbutton = document.querySelector(".icon11")
let nextbutton = document.querySelector(".icon22")
let totalslider = slider.length
let index = 1
//console.log(slider)
/*nextbutton.addEventListener("click",()=>{
    next("next")
})
prevbutton.addEventListener("click",()=>{
    next("prev")
})*/
nextbutton.onclick=()=>{
    next("next")
    console.log("salam")
}
prevbutton.onclick=()=>{
    next("prev")
}
function next(direction){
    if(direction == "next"){
        index++
        if(index == totalslider){
            index = 0
        }
    }
    else{
        if(index==0){
            index=totalslider-1
        }
        else{
            index--;
        }
    }
    slider.forEach((i)=>{
        i.classList.remove("d-none")
        console.log("salam")
    })
    slider[index].classList.add("d-none")
    console.log("salam")
}


///nav

//console.log(document.querySelector(".nav-links"))
let navslide = function(){
    let burger = document.querySelector(".burger")
    let nav = document.querySelector(".nav-links")
    let xicon = document.querySelector(".xicon")

    burger.addEventListener("click",function(){
        nav.classList.add("navactive")
        xicon.addEventListener("click",function(){
           nav.classList.remove("navactive")
        })
    })
}

navslide();


$(document).ready(function(){
   $(".salam").click(function(){
       $(".ul2").not($(this).next()).slideUp() 
       $(this).next().slideToggle() 
    })
})
/////////////////////
let headers = document.querySelectorAll(".header")
headers.forEach(function(header){
    header.addEventListener("click",function(){
        header.nextElementSibling.classList.toggle("acctive")
    })
})



$(document).ready(function(){
    $(".header").click(function(){
        $(".ul2").not($(this).next()).slideUp() 
        $(this).next().slideToggle()
    })
})



/////
//let categoributton = document.querySelector(".show")

$(document).ready(function(){
    $(".show").click(function(){
        $(".hidden .hiddenul").slideToggle();
        console.log("salam")
    })
})