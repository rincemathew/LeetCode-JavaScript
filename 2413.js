// Smallest Even Multiple


var smallestEvenMultiple = function(n) {
    let i = 1;
    while (true) {
        if (i % n == 0 && i % 2 == 0 ) {
            return i
            break;
        }
        i++;
   }
};