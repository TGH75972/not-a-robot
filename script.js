const sounds = [
    {name: 'dog', src: 'sounds/dog.mp3'},
    {name: 'cat', src: 'sounds/cat.mp3'},
    {name: 'cow', src: 'sounds/cow.mp3'}
];

let currentSoundIndex = 0;
let currentSound;
let wrongGuesses = 0;
let suspiciousLevel = 0;

document.getElementById('play-sound').addEventListener('click', playSound);
document.getElementById('submit-guess').addEventListener('click', submitGuess);

function playSound() {
    if (currentSoundIndex >= sounds.length) {
        alert('You have completed the game!');
        return;
    }
    
    currentSound = sounds[currentSoundIndex];
    const audio = new Audio(currentSound.src);
    audio.play();
}

function submitGuess() {
    const userGuess = document.getElementById('guess').value.trim().toLowerCase();
    const result = document.getElementById('result');
    
    if (userGuess === currentSound.name) {
        result.textContent = 'Correct!';
    } else {
        result.textContent = `Wrong! It was a ${currentSound.name}.`;
        wrongGuesses++;
        updateSuspiciousLevel();
    }
    
    currentSoundIndex++;
    setTimeout(playSound, 1000); 
}

function updateSuspiciousLevel() {
    suspiciousLevel = Math.floor((wrongGuesses / sounds.length) * 100);
    alert(`Suspicious Level: ${suspiciousLevel}%`);
}
