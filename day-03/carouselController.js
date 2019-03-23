'use strict';
var imageItems = document.getElementsByClassName('item');
var indicators = document.querySelectorAll('.carousel-indicators span')
var nextBtn = document.getElementsByClassName('next');
var prevBtn = document.getElementsByClassName('prev');

//初始化界面
 //1.显示第一张图 第一个指示灯
imageItems[0].style.opacity = "1";
indicators[0].className = "selected";
var currentIndex = 0;
setIndicator();
//2.设置点击指示灯显示相应的图片
function setIndicator(){
    for(var i=0; i<indicators.length; ++i){
        indicators[i].index = i;
        indicators[i].onclick = function(){
            for(var j=0; j<imageItems.length; ++j){
                currentIndex = this.index;
                indicators[j].className = "";
                imageItems[j].style.opacity = "0";
            }
            indicators[currentIndex].className = "selected";
            imageItems[currentIndex].style.opacity = "1";
        }
    }
}
//3.设置左右按钮点击切换图片以及指示灯
nextBtn[0].onclick = function(){
    imageItems[currentIndex].style.opacity = "0";
    indicators[currentIndex].className = "";
    if(currentIndex < imageItems.length-1){        
        imageItems[++currentIndex].style.opacity = "1";
        indicators[currentIndex].className = "selected";
    }
    else if(currentIndex === imageItems.length-1){
        currentIndex = 0;
        imageItems[currentIndex].style.opacity = "1";
        indicators[currentIndex].className = "selected";
    }
}
prevBtn[0].onclick = function(){
    imageItems[currentIndex].style.opacity = "0";
    indicators[currentIndex].className = "";
    if(currentIndex === 0){
        currentIndex = imageItems.length-1;
        imageItems[currentIndex].style.opacity = "1";
        indicators[currentIndex].className = "selected";
    }
    else{
        --currentIndex;
        imageItems[currentIndex].style.opacity = "1";
        indicators[currentIndex].className = "selected";
    }
}
//4.启动定时器，循环播放
clearInterval(timer);
var timer = setInterval(function(){
    imageItems[currentIndex].style.opacity = "0";
    indicators[currentIndex].className = "";
    if(currentIndex < imageItems.length-1){        
        imageItems[++currentIndex].style.opacity = "1";
        indicators[currentIndex].className = "selected";
    }
    else if(currentIndex === imageItems.length-1){
        currentIndex = 0;
        imageItems[currentIndex].style.opacity = "1";
        indicators[currentIndex].className = "selected";
    }
}, 2000);



//5.鼠标移入 取消轮播，移除，继续轮播
var myCarousel = document.getElementById('myCarousel');
myCarousel.onmouseenter = function(){
    clearInterval(timer);
}
myCarousel.onmouseout = function(){
    clearInterval(timer);
    timer = setInterval(function(){
        imageItems[currentIndex].style.opacity = "0";
        indicators[currentIndex].className = "";
        if(currentIndex < imageItems.length-1){        
            imageItems[++currentIndex].style.opacity = "1";
            indicators[currentIndex].className = "selected";
        }
        else if(currentIndex === imageItems.length-1){
            currentIndex = 0;
            imageItems[currentIndex].style.opacity = "1";
            indicators[currentIndex].className = "selected";
        }
    }, 2000);  
}


