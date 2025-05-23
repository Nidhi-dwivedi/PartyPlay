
// Sound Effects
const soundUrls = {
  click: 'https://assets.mixkit.co/sfx/preview/mixkit-simple-clicking-tone-2858.mp3',
  success: 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3',
  fanfare: 'https://assets.mixkit.co/sfx/preview/mixkit-cheerful-trumpet-fanfare-2293.mp3',
  woosh: 'https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3',
  timer: 'https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3',
};

// Load sounds
const sounds = {};

const loadSounds = () => {
  Object.keys(soundUrls).forEach(key => {
    sounds[key] = new Audio(soundUrls[key]);
    sounds[key].volume = 0.5;
    sounds[key].preload = 'auto';
  });
};

const playSound = (type) => {
  const soundEnabled = localStorage.getItem('party-play-sound') !== 'disabled';
  if (!soundEnabled || !sounds[type]) return;
  
  // Reset and play
  if (sounds[type].readyState >= 2) { // HAVE_CURRENT_DATA or later
    sounds[type].currentTime = 0;
    sounds[type].play().catch(err => console.error('Error playing sound:', err));
  } else {
    // If the sound hasn't loaded yet, set up an event listener
    sounds[type].addEventListener('canplaythrough', () => {
      sounds[type].play().catch(err => console.error('Error playing sound:', err));
    }, { once: true });
  }
};

// Confetti effect
const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#ff99c8'];

const createConfetti = (amount = 50) => {
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '9999';
  document.body.appendChild(confettiContainer);
  
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
      confettiContainer.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
        // Remove container if it's the last confetti
        if (confettiContainer.childElementCount === 0) {
          confettiContainer.remove();
        }
      }, 3000);
    }, i * 50);
  }
};

// Initialize sounds
if (typeof window !== 'undefined') {
  loadSounds();
}

export { playSound, createConfetti };
