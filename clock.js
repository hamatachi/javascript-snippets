        // the date of the last time event X happened //

        const eventDate = new Date('October 1, 2015 00:00:00'); // <-- example start date

        function updateClock() {
            const now = new Date();
            const diff = now - eventDate;

            // calculate the number of days, hours, minutes, and seconds //

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            // Display the result in the element with id="clock" // 

            document.getElementById('clock').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // update the clock every second //
            setTimeout(updateClock, 1000);
        }

        // initialize the clock //

        updateClock();