/* 
 

*/

const startDate = new Date("12/02/2010");
const endDate = new Date("12/30/2022");
const diffTime = Math.abs(startDate - endDate); // Math.abs() always return positive number

/*  Math.ceil() roundes up
    1000 * 69 * 60 * 24 =>  is the number of milliseconds per day.
*/
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
