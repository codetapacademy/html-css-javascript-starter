const musicContainer = document.querySelector('#music-container');
const prevBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');

const audio = document.querySelector('#song-track');
const musicCover = document.querySelector('#music-cover');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const musicTitle = document.querySelector('#music-title');
console.log(musicContainer, playBtn)

// Song Titles
const songs = ['Gone', 'Love', 'Deepness']

// Keep track of the songs
let songIndex = 0

// Initially load song info DOM
loadSong(songs[songIndex]);

// Update song details 
function loadSong(song) {
  musicTitle.innerText = song;
  audio.src = `music/${song}.mp3`;
  musicCover.src = `images/${song}.jpg`
}

// Add event listeners 
playBtn.addEventListener('click', function() {
  const isPlaying = musicContainer.classList.contains('play')
  console.log('play', isPlaying)
  if (isPlaying) {
    pauseSong()
  }
  else {
    playSong()
  }
})

function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play()
}

function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')

  audio.pause()
}

// Change the songs
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
