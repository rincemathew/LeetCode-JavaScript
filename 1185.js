// Day of the Week

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date(year+"-"+month+"-"+day)
    return days[date.getDay()]
};

console.log(dayOfTheWeek(31, 8, 2019))