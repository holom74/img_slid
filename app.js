var imgList = Array.from(document.querySelectorAll('img'))
var lightBox =document.getElementById('lightBox')
var lightItem =document.getElementById('lightItem')
var closeBtn =document.getElementById('close')
var prevBtn = document.getElementById('prevBtn')
var nextBtn = document.getElementById('nextBtn')
// console.log(nextBtn);
var imgIndex ;

for( var i =0;i<imgList.length; i++){
    imgList[i].addEventListener('click',function(e){
        lightBox.classList.remove('d-none')
        var imgSrc = e.target.getAttribute('src')
        lightItem.style.backgroundImage = `url(${imgSrc})`
        imgIndex =imgList.indexOf(e.target)
        console.log(imgIndex);
    })
}


function nextSlide(){
    imgIndex ++

    if( imgIndex>imgList.length -1){
        imgIndex =0
    }
    var imgSrc = imgList[imgIndex].getAttribute('src')
    lightItem.style.backgroundImage = `url(${imgSrc})`
}
nextBtn.addEventListener('click',nextSlide)

function ProvSlide(){
    imgIndex -- 
    if(imgIndex<0){
        imgIndex =imgList.length -1
    }
    var imgSrc = imgList[imgIndex].getAttribute('src')
    lightItem.style.backgroundImage = `url(${imgSrc})`
}

prevBtn.addEventListener('click',ProvSlide)

function closeSlide(){
    lightBox.classList.add('d-none')
}

closeBtn.addEventListener('click',closeSlide)

