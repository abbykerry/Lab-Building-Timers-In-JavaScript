/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  // Return a promise
  // Use setTimeout to log the message after the specified delay
  // Resolve the promise once the message is logged
   return new Promise((resolve) => {
    
    // setTimeout schedules the callback function to run once after the specified delay.
    setTimeout(() => {
      // 1. Log the reminder message (the core task, runs after the delay)
      console.log(message);
      
      // 2. Resolve the Promise to signal to the caller (the test) that the reminder is done.
      resolve();
      
    }, delay);
  });
}

module.exports = { delayedReminder };