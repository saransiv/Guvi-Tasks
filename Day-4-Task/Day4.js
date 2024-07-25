//1) Print odd numbers in an array

let call= function (num) {

    for( let i=0; i<num.length; i++){
        if(num[i]%2==0){
        
        }
        else{
            console.log("Its a odd num:"+ num[i])
            }
           
        }
        
        }
        
let num=[1,2,3,4,5,6, 7, 8, 9, 10];

call(num);

//2) Sum of all numbers in an array

let sumofnum= function (num1) {
    var sum=0;

    for(let i=0; i<num1.length;i++){
    
        sum= sum+num1[i];

        
    }
    console.log("sum of the element in a array: "+ sum);

    }
    
let num1=[1,2,3,4,5];

sumofnum(num1);

//3) Return all the prime numbers in an array

let primenum= function (arr) {

    let sortArray=[];

    arr.forEach((num) => {
        let count=0;
        for(let i=0; i<=num; i++){
            if (num%i===0) {
                count++;
            }
        }
        if (count===2) {
            sortArray.push(num)
        }
        
    })
    console.log(sortArray)   
}
primenum ([2, 3, 5, 6, 45, 67, 7, 35, 56, 79, 20, 90])

//4) Return all the palindromes in an array

function palindromes(arr) {

    let rev=0;
    let sortArray=[];

    arr.forEach((num) => {
        let orig_arr=num;
        while (num>0) { 
              rev= rev*10 + num%10;  
              num= num/10;
        }
        
        if(orig_arr===rev){
           sortArray.push(rev)
        }  
    })
    console.log(sortArray)
    
   }
palindromes(121, 323, 567, 678)

//5) Remove duplicates from an array

let list=[1,2,3,4,5,4,3,6,7,4,6,8,6]

//1st approach

function removeduplicate(array) {

    let x={};
array.forEach((i) => {
     if (!x[i]) {
        x[i]=true;
        
    }
    else{
        x[i]=false;
    }
    
});

return Object.keys (x);

}
console.log(removeduplicate(list))

//2nd  approach

function removedup(array) {
   return [...new Set(list)]
    
}

console.log(removedup())
    
//6) Rotate an array by k times

let array=[1,2,3,4,5,6,7,8,9]

const k= 9;

function roate(array, numOfShift) {

    for (let i = 0; i < numOfShift; i++) {
        array.unshift(array.pop())
        console.log(`steps to rotate ${i+1}`, array)        
    }
    
}

console.log("Rotated an array:"+ roate(array, k))





