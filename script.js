const sounds = [
    {name: 'dog', src: 'sounds/dog.mp3'},
    {name: 'cat', src: 'sounds/cat.mp3'},
    {name: 'cow', src: 'sounds/cow.mp3'},
    {name: 'car', src: 'sounds/car.mp3'},
    {name: 'horse', src: 'sounds/horse.mp3'},
    {name: 'cycle', src: 'sounds/cycle.mp3'},
    {name: 'chainsaw', src: 'sounds/chainsaw.mp3'},
    {name: 'glass break', src: 'sounds/glass_break.mp3'},
    {name: 'fire', src: 'sounds/fire.mp3'},
    {name: 'shotgun', src: 'sounds/shotgun.mp3'}
];

let currentSoundIndex = 0;
let currentSound;
let wrongGuesses = 0;
let suspiciousLevel = 0;

document.getElementById('play-sound').addEventListener('click', playSound);
document.getElementById('submit-guess').addEventListener('click', submitGuess);
document.getElementById('hint-button').addEventListener('click', giveHint);

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
        result.style.color = 'green';
    } else {
        result.textContent = `Wrong! It was a ${currentSound.name}.`;
        result.style.color = 'red';
        wrongGuesses++;
        updateSuspiciousLevel();
    }

    setTimeout(() => { result.textContent = ''; }, 1000);
    
    currentSoundIndex++;
    setTimeout(playSound, 1000); 
}

function giveHint() {
    alert(`Hint: The sound is of a ${currentSound.name}`);
}

function updateSuspiciousLevel() {
    suspiciousLevel = Math.floor((wrongGuesses / sounds.length) * 100);
    alert(`Suspicious Level: ${suspiciousLevel}%`);
}
