document.getElementById('increaseBtn').addEventListener('click', function() {
    var volumeInput = document.getElementById('volumeInput');
    var volumeStatus = document.getElementById('volumeStatus');
    var volume = parseInt(volumeInput.value);

    // Check if input is a valid number
    if (!isNaN(volume)) {
        // Generate random increase amount between 1 and 10
        var increaseAmount = Math.floor(Math.random() * 10) + 1;

        // Increase volume by random amount
        volume += increaseAmount;

        // Ensure volume does not exceed 100
        if (volume > 100) {
            volume = 100;
        }

        // Update volume status
        volumeStatus.textContent = 'Volume: ' + volume;
    }
});

document.getElementById('decreaseBtn').addEventListener('click', function() {
    var volumeInput = document.getElementById('volumeInput');
    var volumeStatus = document.getElementById('volumeStatus');
    var volume = parseInt(volumeInput.value);

    // Check if input is a valid number
    if (!isNaN(volume)) {
        // Generate random decrease amount between 1 and 10
        var decreaseAmount = Math.floor(Math.random() * 10) + 1;

        // Decrease volume by random amount
        volume -= decreaseAmount;

        // Ensure volume does not go below 0
        if (volume < 0) {
            volume = 0;
        }

        // Update volume status
        volumeStatus.textContent = 'Volume: ' + volume;
    }
});
