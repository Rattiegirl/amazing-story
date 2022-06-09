//const r = [1,2,3]

//console.log (r.map(x => x+10))

//const arr1= [1,45,97,100,30,24]

//console.log(arr1.filter(x=> x%2 === 1))



// ['Rudolph', 'Norland', 'Natalie'].join(', Hi! ')

// function positiveSum(arr) {
//     const res = arr.filter(x => x>0)
//      let giv  = 0 
//     for (let i=0; i < res.length; i++){
//      giv = giv + res[i]
      
//     }
//      return giv
//    } 

const x= [2,36,4,3,2,4,6,22323,2,5,2326,3]

// console.log (x.filter(o => o%2 === 0).length)
// const max = (r)=>{
//     return r.sort(function(a,b){return (a-b)})[r.length-1]

// }
// console.log(max(x))

// const min = (r)=>{
//     return r.sort(function(a,b){return (a-b)})[0]

// }
// console.log(min(x))

const average = (r)=>{
    let end= 0
    for (i=0; i<r.length; i++){
       end += r[i] 
    }
    
    return (end/r.length)

}
console.log(average(x))