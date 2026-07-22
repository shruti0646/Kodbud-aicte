const images = [
"images/image1.jpg",
"images/image2.jpg",
"images/image3.jpg"
];
let currentIndex = 0;
const sliderImage =
document.getElementById("sliderImage");
const dots =
document.querySelectorAll(".dot");
function showImage(index){
currentIndex=index;
sliderImage.src=images[currentIndex];
dots.forEach(dot=>{
dot.classList.remove("active");
});
dots[currentIndex].classList.add("active");
}
// Next Button
document.getElementById("nextBtn")
.addEventListener("click",()=>{
currentIndex++;
if(currentIndex >= images.length){
currentIndex=0;
}
showImage(currentIndex);
});

// Previous Button
document.getElementById("prevBtn")
.addEventListener("click",()=>{
currentIndex--;
if(currentIndex < 0){
currentIndex=images.length-1;
}
showImage(currentIndex);
});

// Auto Play
setInterval(()=>{
currentIndex++;
if(currentIndex >= images.length){
currentIndex=0;
}
showImage(currentIndex);
},3000);
