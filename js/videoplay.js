let btn =document.getElementById('trustme');

// fuction that shows and plays a video when the button is clicked
btn.addEventListener('click', function(){
    let video = document.getElementById('video');
    btn.style.display = 'none';
    video.style.display = 'block';
    video.volume = 0.2;
    video.play()
});


