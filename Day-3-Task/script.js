//Display all county flags in the console
// print all countires names, regions, sub-region and populations

const flagshow =document.getElementById("container")
const req= new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all")
req.send();
req.onload=function () {
    const obj= JSON.parse(this.response)
    for (let index = 0; index < obj.length; index++) {
        console.log(obj[index].flags.png) ;
        console.log("Countries Name: "+ obj[index].name.common)
        console.log("The countries regions:"+ obj[index].region, "and sub-regions:"+ obj[index].subregion);
        console.log("The countries populations :"+ obj[index].population);
        
    }
}

//How to compare two JSON have the same properties without order?

var obj1= {name: "Person 1", age: 5};
var obj2= {age: 5, name: "Person 1"}

const hasSameDate=function isEqual(obj1, obj2) {
 const obj1keys=   Object.keys(obj1);
 const obj2keys=   Object.keys(obj2);

 if (obj1keys !== obj2keys) {
    return obj1keys.every(keys=>obj2.hasOwnProperty(keys)&& obj2[keys]=== obj1[keys])
    
 };
 return false;

 
}



console.log(hasSameDate(obj1, obj2));