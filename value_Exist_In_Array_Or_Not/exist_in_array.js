/* program to check the value is exist in arry or not */

let arrayFruits =['APPLE','ORANGE','GRAPE','BANANA','GAUVA','CHERRY']

// we can get input from user & convert into upper case 
let findFruit='CHERRY'

let indexOfFruit=arrayFruits.indexOf(findFruit)
// index of () return 0 to n-1 , it will be the index of the value , so we store return index num value in {indexOfFruit} 

//  indexof() return -1 it execute else 
indexOfFruit>=0 ? console.log(`${arrayFruits[indexOfFruit]} is exist `) : console.log(`${findFruit} is not found`)
// {arrayFruit[index number ]}
