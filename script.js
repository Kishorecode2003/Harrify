window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.jpg");
    bannerHeading.textContent = "This is Harris Jayaraj";
    bannerText.textContent = "The essential tracks, All in one Playlist";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "This is Harris Jayaraj";
        bannerText.textContent = "The essential tracks, All in one Playlist";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b01.jpg)";
            bannerImage.setAttribute("src", "images/image 1.jpg");
            bannerHeading.textContent = "Ava Enna";
            bannerText.textContent = "By Harris Jayaraj";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b02.jpg)";
            bannerImage.setAttribute("src", "images/image 2.jpg");
            bannerHeading.textContent = "Mun Andhi";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b03.jpg)";
            bannerImage.setAttribute("src", "images/image 3.jpg");
            bannerHeading.textContent = "Manjal Veyil";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b04.jpg)";
            bannerImage.setAttribute("src", "images/image 4.jpg");
            bannerHeading.textContent = "Oru Manam";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b05.jpg)";
            bannerImage.setAttribute("src", "images/image 5.jpg");
            bannerHeading.textContent = "Venaam Machan";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.jpg)";
            bannerImage.setAttribute("src", "images/image 6.jpg");
            bannerHeading.textContent = "Ennamo Yeadho";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.jpg)";
            bannerImage.setAttribute("src", "images/image 7.jpg");
            bannerHeading.textContent = "Unakkul Naane";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.jpg)";
            bannerImage.setAttribute("src", "images/image 8.jpg");
            bannerHeading.textContent = "Vaarayo Vaarayo";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b09.jpg)";
            bannerImage.setAttribute("src", "images/image 9.jpg");
            bannerHeading.textContent = "Nenjukkul Peidhidum";
            bannerText.textContent = "By Harris Jayaraj";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.jpg)";
            bannerImage.setAttribute("src", "images/image 10.jpg");
            bannerHeading.textContent = "Mazhai Vara Pogudhae";
            bannerText.textContent = "By Harris Jayaraj";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}