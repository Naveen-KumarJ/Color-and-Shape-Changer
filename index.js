const colorsArr = ["#77B254","#FFE8B6","#C5BAFF","#DDA853","#EB5A3C","#16C47F","#E82561","#A5BFCC","#E5D9F2","#074799","#131010","#4B5945"];
const shapesArr = ["polygon(50% 0%, 0% 100%, 100% 100%)","polygon(50% 0%, 0% 100%, 100% 100%)", "circle(50% at 50% 50%)", "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", "inset(0)", "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)", "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)", "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)"];
let changeColorBtn = document.getElementById("change-color-btn");4
let changeShapeBtn = document.getElementById("change-shape-btn");
let contextDiv = document.querySelector(".context");
let shapeDiv = document.querySelector(".shape");
let clipPathInfo = document.querySelector(".info-clip-path");
let colorInfo = document.querySelector(".info-color");

changeColorBtn.addEventListener("click",()=>{
    let colorCode = colorsArr[Math.floor(Math.random()*colorsArr.length)];
    contextDiv.style.backgroundColor = colorCode;
    colorInfo.innerText =  `Color Code : ${colorCode}`;
});

changeShapeBtn.addEventListener("click",()=>{
    let clipPath = shapesArr[Math.floor(Math.random()*shapesArr.length)];
    clipPathInfo.innerText = `Clip Path : ${clipPath}`;
    shapeDiv.style.clipPath = clipPath;
    shapeDiv.classList.add("rotation-animation");
});
shapeDiv.addEventListener("animationend",()=>{
    shapeDiv.classList.remove("rotation-animation");
});


