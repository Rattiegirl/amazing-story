//////function multiply(a, b) {
/////    return a * b
//}
////console.log(multiply(2, 3))



// function maps(x) {
//     const back = []
//     for (let num of x) {
//         back.push(num * 2)
//     }

//     return back
// }

// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i += 1) {
//         if (haystack[i] === "needle") {
//             return "found the needle at position " + i
//         }

//     }


// }


function countPositivesSumNegatives(input) {
    let count=0
    let sum = 0
    if (!input || !input.length){
      return []
    }
    for (let item of input ){
     if (item>0){
      count+=1
     }else {
       sum += item
     }
    }
      return [count , sum]
  }