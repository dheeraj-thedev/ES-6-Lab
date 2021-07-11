// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

// 4. Printed all the array contents
// 1. We need to print all the first Name 
// 6. we need to print All the males 
// 7. we need to print All the malefemaless 

var usersArray = require ('./data')


// Vanilla JS |  ES6
function getAllFNames(users,postFIx){  // 
    let allFirstName=[]  // to save all the fNames
    for(let loopCtr =0 ; loopCtr < users.length ; loopCtr++){
        allFirstName.push(users.firstName)
    }
    return allFirstName;
}

const getAllFNamesArrow = (users, postFIx) =>{  // 
    let allFirstName=[]  // to save all the fNames
    for(let loopCtr =0 ; loopCtr < users.length ; loopCtr++){
        allFirstName.push(users.firstName+postFIx)
    }
    return allFirstName;
}

getAllFNamesArrow(usersArray, "My Customr")




//var allFname = getAllFNames(usersArray)

const getAllFirstNames = arrUsers =>{
    let allFirstName=[]
    // ES6 --?? It
    for (let user of arrUsers) {
        allFirstName.push(user.firstName)
    }
    
    return allFirstName
}

var allFNames=getAllFirstNames(usersArray)
console.log(allFNames)


module.exports= getAllFNamesArrow