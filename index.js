function map(array, func) {
    const newArray = []
    for (const i in array){
        newArray.push(func(array[i]))
    }
    return newArray
}

function reduce(sourceArray, func, startingPoint){

    let i;

    if(!startingPoint){
        startingPoint = sourceArray[0]
        i = 1
    } else{
        i = 0
    }

    let x = startingPoint 

    for (i; i < sourceArray.length; i++){
        x = func(sourceArray[i], x)
    }
    return x
   
}

// function reduce(sourceArray, func, startingPoint){
//     let i;
//     if(!startingPoint){
//       startingPoint = sourceArray[0];
//      i =1;
//     }
//     else{
//         i=0;
//     }
//     let x=startingPoint;
  
//     for (i; i < sourceArray.length; i++) {
//       x = func(sourceArray[i], x)
//     }
  
//     return x;
//   }