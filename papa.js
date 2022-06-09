let array1 = [1, 3, 5, 7, 78];
const array2 = [12, 3, 8, 78, 4, 9];

for (i=0; i < array2.length; i++) {    // i = 0; 0 < 3 true  [1, 3, 5, array2[0] = 12]
   array1.push(array2[i])              // i = 1; 1 < 3 true  [1, 3, 5, 12, array2[1] = 3]
}                                      // i = 2; 2 < 3 true  [1, 3, 5, 12, 3, 8]
                                       // i = 3; 3 < 3 false
array1 = array1.sort(function(a, b){return a - b});

for (i=0; i < array1.length; i++) {    // i = 0, 0 < 6 true 
    if (array1[i] === array1[i+1]) {
        array1.splice(i, 1)
    }                  
 }           

console.log(array1);



