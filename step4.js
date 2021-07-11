//Iteration 4: practice .filter() method and how to return two elements
//Create a function genderView() which should return two arrays new arrays femaleUsers and maleUsers.
// Depending on the gender, fill them with strings containing users' first and last names.

var arrayUsers= require('./data')
var getFullNames= require('./step2')

const genderView = users =>{
    // filter expression => filter 
    const male = users.filter((user)=>{
       if(user.gender==='male'){
           return true;
       }
    });
    const female = users.filter((user)=>{
        if(user.gender==='female'){
            return true;
        }
     });

     return {
         femaleUsers : getFullNames(female),
         maleUsers: getFullNames(male)
     }
}
 
console.log( genderView(arrayUsers));