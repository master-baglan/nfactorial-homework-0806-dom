const shiftDancerLeft = document.getElementById("prev");
const shiftDancerRight = document.getElementById("next");
const nextSong = document.getElementById("nextSong");
const prevSong = document.getElementById("prevSong");
const audio1 = document.getElementById("mayforce");
const musicPlay = document.getElementById("musicPlay");
const songName = document.getElementById("songName");
let counter = 1;
let currentTrack = 0;

let  dancers = ["img/dance1.gif","img/dance2.gif","img/dance3.gif","img/dance4.gif","img/dance5.gif"];
let music = ["sound/Bon Jovi - Have A Nice Day.mp3","sound/J. Cole - MIDDLE CHILD.mp3","sound/Linkin Park - Numb.mp3",
"sound/Metallica - The Unforgiven.mp3","sound/Nelly - Just a dream.mp3","sound/Queen - Another One Bites The Dust.mp3"];
let song = new Audio();
song.src = music[0];
songName.textContent = music[currentTrack].replace(".mp3","").replace("sound/","");
function changeDancer(n)
{
    
    if(n>0){
        counter++;
        if(counter === dancers.length ){
            counter = 0;
        }
    }else{
        counter--;
        if(counter < 0){
            counter = dancers.length - 1; 
        }
    }
    if(counter === dancers.length-1){
    document.getElementById("dsl").src = dancers[counter-1];
    document.getElementById("d").src = dancers[counter];
    document.getElementById("dsr").src = dancers[0];
    } else if (counter === 0){
    document.getElementById("dsl").src = dancers[dancers.length-1];
    document.getElementById("d").src = dancers[counter];
    document.getElementById("dsr").src = dancers[counter+1];
    }else{
    document.getElementById("dsl").src = dancers[counter-1];
    document.getElementById("d").src = dancers[counter];
    document.getElementById("dsr").src = dancers[counter+1];
    }

};
musicPlay.addEventListener("click",play);
function play(){
    if(song.paused){
        musicPlay.style.borderColor = "blue";

        song.play();
        
    }else{
        song.pause();
        musicPlay.style.borderColor = "rgba(198, 230, 230, 0.747)";
    }
    songName.textContent = music[currentTrack].replace(".mp3","").replace("sound/","");
};
nextSong.addEventListener("click",()=>{
    currentTrack++;
    if(currentTrack === music.length){
        currentTrack=0;
    }
    song.src = music[currentTrack];
    play();
});
prevSong.addEventListener("click",()=>{
    currentTrack--;
    if(currentTrack<0){
        currentTrack =music.length-1;
    }
    song.src = music[currentTrack];
    play();
});
   shiftDancerRight.addEventListener("click", function(){changeDancer(1)});
   shiftDancerLeft.addEventListener("click",function(){changeDancer(-1)});
