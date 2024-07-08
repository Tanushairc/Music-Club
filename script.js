let starting=document.querySelector('.starting');
setTimeout(() => {
    starting.style.top="-100%"
}, 2800);


let songindex=0;
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let playgif=document.getElementById("playgif");
let card1=document.getElementById("card1");
let card2=document.getElementById("card2");
let card3=document.getElementById("card3");
let card4=document.getElementById("card4");
let card5=document.getElementById("card5");
let card6=document.getElementById("card6");
let card7=document.getElementById("card7");
let card8=document.getElementById("card8");
let card9=document.getElementById("card9");
let card10=document.getElementById("card10");
let play1=document.getElementById("play1");
let play2=document.getElementById("play2");
let play3=document.getElementById("play3");
let play4=document.getElementById("play4");
let play5=document.getElementById("play5");
let play6=document.getElementById("play6");
let play7=document.getElementById("play7");
let play8=document.getElementById("play8");
let play9=document.getElementById("play9");
let play10=document.getElementById("play10");
let ti=document.getElementById("ti");
let next=document.getElementById("next");
let back=document.getElementById("back");
let sound=document.getElementById("sound");
let volumebar=document.getElementById("volumebar");
let audioelement=new Audio('./utilities/0.mp3');
audioelement.play();
masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause');
playgif.style.opacity=1;
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;
});

let player=document.getElementById("player");
let content=document.getElementById("content");
let leftside=document.getElementById("leftside");
let mainone=document.getElementById("mainone");
let darkmode=document.getElementById("darkmode");
let dark=true;

darkmode.addEventListener("click",()=>{
    if(dark){
        player.style.backgroundColor="#F7DED0";
        content.style.backgroundColor="bisque";
        leftside.style.background="linear-gradient(#ccd3ca,#F7DED0)";
        mainone.style.color="black";
        darkmode.classList.remove("fa-toggle-on");
        darkmode.classList.add("fa-toggle-off");
        dark=false;
    }
    else{
        player.style.backgroundColor="rgb(15, 15, 15)";
        content.style.backgroundColor="black";
        leftside.style.background="linear-gradient(#383838,black)";
        mainone.style.color="white";
        darkmode.classList.remove("fa-toggle-off");
        darkmode.classList.add("fa-toggle-on");
        dark=true;
    }
});

let songs=[
    {songname:"Belly Dancer",filepath:"./utilities/1.mp3"},
    {songname:"Four Out of Five",filepath:"./utilities/2.mp3"},
    {songname:"cheques",filepath:"./utilities/3.mp3"},
    {songname:"After Hour",filepath:"./utilities/4.mp3"},
    {songname:"Faded",filepath:"./utilities/5.mp3"},
    {songname:"Chaleya",filepath:"./utilities/6.mp3"},
    {songname:"tere liye",filepath:"./utilities/7.mp3"},
    {songname:"Unstoppable",filepath:"./utilities/8.mp3"},
    {songname:"On My Way",filepath:"./utilities/9.mp3"},
    {songname:"Hua Mai",filepath:"./utilities/10.mp3"},
];

let i=-1;

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        playgif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');
        playgif.style.opacity=0;
        play1.classList.remove('fa-circle-pause');
        play1.classList.add('fa-circle-play');
        play2.classList.remove('fa-circle-pause');
        play2.classList.add('fa-circle-play');
        play3.classList.remove('fa-circle-pause');
        play3.classList.add('fa-circle-play');
        play4.classList.remove('fa-circle-pause');
        play4.classList.add('fa-circle-play');
        play5.classList.remove('fa-circle-pause');
        play5.classList.add('fa-circle-play');
        play6.classList.remove('fa-circle-pause');
        play6.classList.add('fa-circle-play');
        play7.classList.remove('fa-circle-pause');
        play7.classList.add('fa-circle-play');
        play8.classList.remove('fa-circle-pause');
        play8.classList.add('fa-circle-play');
        play9.classList.remove('fa-circle-pause');
        play9.classList.add('fa-circle-play');
        play10.classList.remove('fa-circle-pause');
        play10.classList.add('fa-circle-play');
    }
})

card1.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/1.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play1.classList.remove('fa-circle-play');
        play1.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Belly Dancer";
    }
})

card2.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/2.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play2.classList.remove('fa-circle-play');
        play2.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Four out of Five";
    }
})

card3.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/3.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play3.classList.remove('fa-circle-play');
        play3.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Cheques";
    }
})

card4.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/4.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play4.classList.remove('fa-circle-play');
        play4.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="After Hour";
    }
})

card5.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/5.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play5.classList.remove('fa-circle-play');
        play5.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Faded";
    }
})

card6.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/6.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play6.classList.remove('fa-circle-play');
        play6.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Chaleya";
    }
})

card7.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/7.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play7.classList.remove('fa-circle-play');
        play7.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Tere liye";
    }
})

card8.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/8.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play8.classList.remove('fa-circle-play');
        play8.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Unstoppable";
    }
})

card9.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/9.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play9.classList.remove('fa-circle-play');
        play9.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="On My Way";
    }
})

card10.addEventListener("click",()=>{
    audioelement.pause();
    audioelement=new Audio("./utilities/10.mp3");
    if(audioelement.paused){
        audioelement.play();
        playgif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        play10.classList.remove('fa-circle-play');
        play10.classList.add('fa-circle-pause');
        audioelement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            myprogressbar.value=progress;
        });
        ti.innerHTML="Hua Mai";
    }
})

next.addEventListener('click',()=>{
    i=i+1;
    if(i==10){
        i=0;
    }
    let obj=songs[i];
    audioelement.pause();
    ti.innerHTML=obj.songname;
    audioelement=new Audio(`${obj.filepath}`);
    audioelement.play();
    playgif.style.opacity=1;
    audioelement.addEventListener('timeupdate',()=>{
        progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        myprogressbar.value=progress;
    });
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

back.addEventListener('click',()=>{
    i=i-1;
    if(i==-1){
        i=9;
    }
    let obj=songs[i];
    audioelement.pause();
    ti.innerHTML=obj.songname;
    audioelement=new Audio(`${obj.filepath}`);
    audioelement.play();
    playgif.style.opacity=1;
    audioelement.addEventListener('timeupdate',()=>{
        progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        myprogressbar.value=progress;
    });
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

let ismuted=false;

sound.addEventListener("click",()=>{
    if(!ismuted){
        sound.classList.remove("fa-volume-high");
        sound.classList.add("fa-volume-xmark");
        audioelement.muted=true;
        ismuted=true;
    }
    else{
        sound.classList.remove("fa-volume-xmark");
        sound.classList.add("fa-volume-high");
        audioelement.muted=false;
        ismuted=false;
    }
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
});