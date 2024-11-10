function smartRepeatedLogger(message, interval, duration) {
    let timerId = null;
    let timeElapsed = 0;

    // Start logging the message
    const start = () => {
        timerId = setInterval(() => {
            timeElapsed += interval;
            console.log(message);

            // Stop logging after the specified duration
            if (timeElapsed >= duration) {
                clearInterval(timerId);
            }
        }, interval);
    };

    // Pause the logging
    const pause = () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        }
    };

    // Resume the logging
    const resume = () => {
        if (!timerId) {
            start();
        }
    };

    // Start logging initially
    start();

    // Return pause and resume methods
    return { pause, resume };
}

const logger = smartRepeatedLogger("Logging...", 1000, 10000);
setTimeout(() => logger.pause(), 3000); // Pauses after 3 seconds
setTimeout(() => logger.resume(), 6000); // Resumes after 6 seconds
