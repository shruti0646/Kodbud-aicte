const images = [
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
"https://images.unsplash.com/photo-1519608487953-e999c86e7455",
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
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
