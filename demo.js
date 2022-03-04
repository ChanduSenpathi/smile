const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.anchor__link');
let access=document.getElementById("access-img")
let img_sec=document.getElementsByClassName("ntsl-image")
let prevbtn=document.getElementById("prev")
let nextbtn=document.getElementById("next")

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

nextbtn.addEventListener('click',function(){
  access.append(img_sec[0])
})
prevbtn.addEventListener('click',function(){
  access.prepend(img_sec[img_sec.length-1])
})

