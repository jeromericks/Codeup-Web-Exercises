<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Defuse the BOM">
    <title>Defuse the BOM</title>
    <link rel="shortcut icon" href="javascript.png">
</head>
<body>
    <h2 id="message">This BOM will self destruct in <span id="timer">5</span> seconds...</h2>

    <button id="defuser">Defuse the BOM</button>

    <script>
        var detonationTimer = 5;
        var count = 0;
        var max = 10;
        var interval = 1000;

        var intervalId = setInterval(function () {
            if (count >= max) {
                clearInterval(intervalId);
                defuseTheBOM();
            } else {
                count++;
                updateTimer();
            }
        }, interval);

        // TODO: This function needs to be called once every second
        function updateTimer()
        {
            if (detonationTimer == 0) {
                alert('EXTERMINATE!');
                document.body.innerHTML = '';
                location.reload();
            } else if (detonationTimer > 0) {
                document.getElementById('timer').innerHTML = detonationTimer;
            } 

            detonationTimer--;

        }

        // TODO: When this function runs, it needs to
        // cancel the interval/timeout for updateTimer()
        function defuseTheBOM()
        {
            clearInterval(intervalId);
            alert('You defused the BOM!');
            location.reload();
        }

        // Don't modify anything below this line!
        //
        // This causes the defuseTheBOM() function to be called
        // when the "defuser" button is clicked.
        // We will learn about events in the DOM lessons
        var defuser = document.getElementById('defuser');
        defuser.addEventListener('click', defuseTheBOM, false);
    </script>
</body>
</html>
