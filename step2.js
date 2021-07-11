
var usersArray = require ('./data')

function getFullNamesT(users){
    const fullNames=[]   // 
    for (let user of users) {
       // fullNames.push(user.firstName+"-"+user.lastName);
            fullNames.push(`${user.firstName} ${user.lastName}`)
    }
    return fullNames
}

const getFullNames=users=>{
    const fullNames=[]   // 
    for (let user of users) {
       // fullNames.push(user.firstName+"-"+user.lastName);
            fullNames.push(`${user.firstName} ${user.lastName}`) // String 
    }
    return fullNames
}

// var data = getFullNames(usersArray);
// console.log(data)

module.exports=  getFullNames