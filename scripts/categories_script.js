function muteAndUnmute(){
    var audio = document.getElementById('myAudio');

    var button1 = document.getElementById("button1")
    var button2 = document.getElementById("button2")
    
    // Toggle visibility of buttons
    if(button1.style.display == "block"){
        button1.style.display = "none";
        button2.style.display = "block";

        audio.muted = false;
        audio.play();
    }else{
        button1.style.display = "block";
        button2.style.display = "none";

        audio.muted = true;
        audio.pause();
    }
}


var scrollHeightCondition = 300;
var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function(){
    if(document.body.scrollTop > scrollHeightCondition || document.documentElement.scrollTop > scrollHeightCondition){
        backToTopBtn.style.display = "block";
    }else{
        backToTopBtn.style.display = "none";
    }
}

window.scrollToTop = function(){
        const scrollDuratuion = 1000;
        const scrollStep = -window.scrollY / (scrollDuratuion / 15);

        const scrollInterval = setInterval(function(){
            if (window.scrollY !== 0){
                window.scrollBy(0, scrollStep);
            }else{
                clearInterval(scrollInterval);
            }
        }, 15);
}