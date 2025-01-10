// Preload audio files with local paths
const gemSound = new Audio('/sounds/gem.mp3');
const rubySound = new Audio('/sounds/ruby.mp3');

// Pre-load the audio files
gemSound.load();
rubySound.load();

export function playGameSound(type: 'gem' | 'ruby') {
  const audio = type === 'gem' ? gemSound : rubySound;
  
  // Reset the audio to start
  audio.currentTime = 0;
  
  // Play the sound with error handling
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Audio is playing
      })
      .catch(error => {
        console.error('Error playing sound:', error);
        // Attempt to reload the audio
        audio.load();
      });
  }
}