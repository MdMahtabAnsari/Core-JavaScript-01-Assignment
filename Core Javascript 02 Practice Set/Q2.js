/*
2. The following is an array of 10 students ages:
    => const ages = [19,22, 19, 24, 20,25,26,24,25,44]
      .Sort the array and find the min and max age.
      .Find the median age(one middle item or two middle items divided    by two)
     .Find the average age(all items divided by number of items)
     .Find the range of the ages(max minus min)
     .Compare the value of (min - average) and (max - average), use abs() method 
 */

const ages = [19, 22, 19, 24, 25, 26, 24, 25, 24]
ages.sort((a, b) => (a - b));

// find min and max age
console.log(ages[0], ages[ages.length - 1]);

// find median age
if(ages.length % 2 == 0){
    console.log((ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2);
}
else{
    console.log(ages[Math.floor(ages.length / 2)]);
}
// find average age
console.log(ages.reduce((a, b) => a + b) / ages.length);

// find range of ages
console.log(ages[ages.length - 1] - ages[0]);
// compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(ages[0] - ages.reduce((a, b) => a + b) / ages.length));
console.log(Math.abs(ages[ages.length - 1] - ages.reduce((a, b) => a + b) / ages.length));