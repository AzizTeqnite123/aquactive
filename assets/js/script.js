AOS.init(
    {
        // once: true,
    }
);

const video = document.getElementById('videoSecMn');
const toggleBtn = document.getElementById('toggleBtn');
const videoWrapper = document.querySelector('.video-banner-hldr');
const videoContentBox = document.getElementById('videoContentBox');

const playIcon = `
  <svg width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2v12l10-6-10-6z"/>
  </svg> Play Video
`;

const pauseIcon = `
  <svg width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2h3v12H6zm5 0h3v12h-3z"/>
  </svg> Pause Video
`;

videoContentBox.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener('play', () => {
    toggleBtn.innerHTML = pauseIcon;
    video.controls = true;
    videoWrapper.classList.add('video-playing');
});

video.addEventListener('pause', () => {
    toggleBtn.innerHTML = playIcon;
    video.controls = false;
    videoWrapper.classList.remove('video-playing');
});

video.addEventListener('ended', () => {
    toggleBtn.innerHTML = playIcon;
    video.controls = false;
    videoWrapper.classList.remove('video-playing');
});


