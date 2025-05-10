// Calculates # of weeks in a year, rounds down to nearest integer

const weeksInYear = Math.floor(365/7);

// Calculates the number of days left over after 365 is divided by 7

const daysLeftOver = 365 % 7 ;

console.log("A year has " + weeksInYear + " weeks and "+ daysLeftOver + " day(s) left over.");