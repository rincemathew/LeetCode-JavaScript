// Reformat Date

/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const mpa =new Map([["Jan",'01'], ["Feb",'02'], ["Mar",'03'], ["Apr",'04'], ["May",'05'], ["Jun",'06'], ["Jul",'07'], ["Aug",'08'], ["Sep",'09'], ["Oct",'10'], ["Nov",'11'], ["Dec",'12']])
    result = ''
    date = date.split(' ')
    result = date[2] +'-'
    result = result + mpa.get(date[1]) +'-'
    // console.log(isNaN(date[0][1]))
    if(isNaN(date[0][1])) {
        result = result + '0'+date[0][0]
    } else {
        result = result + date[0][0]+date[0][1]
    }
    return result

};

console.log(reformatDate("20th Oct 2052"))
console.log(reformatDate("6th Jun 1933"))