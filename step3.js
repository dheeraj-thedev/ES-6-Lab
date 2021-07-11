// Using for...of loop iterate over the usersArray;
// Destructure firstName, lastName and balance from each user object to create new variables;
// After destructuring create a new object using object literal (only name of variable) consisting of firstName, lastName and balance. Check the following example:
// const userDetails = {
//   firstName,
//   lastName,
//   balance
// };
// Push each new object into a new array usersCreditDetails
// {
//     firstName: 'Kirby',
//     lastName: 'Doyle',
//     id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//     isActive: false,
//     balance: '$3,570.06',
//     gender: 'male'
//   }

var usersArray = require ('./data')

const getUsersCreditDetails = users =>{
    const userCreditDetails =[]

    for (const user of users) {
        var {firstName,lastName,balance}=user
        const userDetails = {
              firstName,
              lastName,
              balance
            };
        userCreditDetails.push(userDetails);
    }
    return userCreditDetails
}

console.log( getUsersCreditDetails(usersArray))