var volume = 50; // Initial volume value

document.getElementById('volumeUpButton').addEventListener('click', function() {
    // Decrease volume by 10 and update volume slider and status
    volume -= 10;
    if (volume < 0) {
        volume = 0;
    }
    updateVolume();
});

document.getElementById('volumeDownButton').addEventListener('click', function() {
    // Increase volume by 10 and update volume slider and status
    volume += 10;
    if (volume > 100) {
        volume = 100;
    }
    updateVolume();
});

document.getElementById('volumeSlider').addEventListener('input', function() {
    // Update volume based on volume slider value and update volume status
    volume = this.value;
    updateVolume();
});

function updateVolume() {
    // Update volume slider, volume status, and play audio file to simulate volume change
    document.getElementById('volumeSlider').value = volume;
    document.getElementById('volumeStatus').textContent = 'Volume: ' + volume;
    var audio = new Audio('volume_change_sound.mp3');
    audio.play();
}

