
let songindex=0;
let audioelement=new Audio('songs/Naa-Ready.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let mastersongname = document.getElementById('mastersongname');


let songs=[

     {songname:"Naa roja nuvve",filepath:"na roja nuvve.mp3",coverpath:"covers/1.jpg"},
     {songname:"Aganadhe",filepath:"songs/aganadhe.mp3",coverpath:"covers/2.jpg"},
     {songname:"Enno ratrulu vastai",filepath:"songs/Enno ratrulu vastai.mp3",coverpath:"covers/3.jpg"},
     {songname:"Naa-Ready",filepath:"songs/Naa-Ready.mp3",coverpath:"covers/4.jpg"},
     {songname:"Nachavule Nachavule",filepath:"songs/Nachavule Nachavule.mp3",coverpath:"covers/5.jpg"},
     {songname:"potti pilla",filepath:"songs/potti pilla.mp3",coverpath:"covers/6.jpg"},
     {songname:"Ram sita Ram",filepath:"songs/Ram sita Ram.mp3",coverpath:"covers/7.jpg"},
];




masterplay.addEventListener('click',()=>{
     if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
     } 
     else
     {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
     }

})
audioelement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
   myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
   audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})

const makeallplays = () => {
   Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
      
         element.classList.remove('fa-pause');
         element.classList.add('fa-play-circle');
   })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
   element.addEventListener('click', (e) => {
       makeallplays();
       songindex = parseInt(e.target.id);
       element.classList.remove('fa-play');
       element.classList.add('fa-pause-circle');
       audioelement.src = songs[songindex].filepath;
       mastersongname.innerText = songs[songindex].songname;
       audioelement.currentTime = 0;
       audioelement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause-circle');
   });
});


document.getElementById('next').addEventListener('click', ()=>{
   if(songindex>=9){
       songindex = 0
   }
   else{
       songindex += 1;
   }

   mastersongname.innerText = songs[songindex].songname;
   audioelement.src = `songs/${mastersongname.innerText }.mp3`;

   audioelement.currentTime = 0;
   audioelement.play();
   masterplay.classList.remove('fa-play');
   masterplay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click', ()=>{
   if(songindex<=0){
       songindex = 0
   }
   else{
       songindex -= 1;
   }
   mastersongname.innerText = songs[songindex].songname;
   audioelement.src = `songs/${mastersongname.innerText}.mp3`;

   audioelement.currentTime = 0;
   audioelement.play();
   masterplay.classList.remove('fa-play');
   masterplay.classList.add('fa-pause-circle');
})