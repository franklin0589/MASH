function mash (){
    if(process.argv[2]&&process.argv[4]&&process.argv[3]){
    return"You will live in a " + getHome() +", you will have " + getChildrenCount()+" kids,"+", you'll drive a "+getCar()+", your spouse's name is " +nameOfSpouse()+", your salary is "+Salary()+", you will die when you are "+ Age()+", and you will be a "+Career()+".";
}
else if(process.argv[2]===undefined) {
 return "You need to pick a house"

}
else if(process.argv[3]===undefined) {
 return "You need to the  number of children"
 
}
else{
 return "You need to pick a car"
    
}
}
 console.log(mash());
function randomvalue(x){
    const randomvalue = Math.floor(Math.random()*x);
    return randomvalue;
}
 function getHome(){
     const houses= ["Mansion","Apartment","Shack","House", process.argv[2]];
    return houses[randomvalue(houses.length)];
 }
 function getChildrenCount (){
     var fifty= randomvalue(2);
     if (fifty===0){
     return randomvalue(100);
     }
     if (fifty===1){
        return process.argv[3]
        }
 }
function getCar(){
    const cars=["lambo","convertible","box with wheels",process.argv[4]];
    return cars[randomvalue(cars.length)];
}
function nameOfSpouse(){
    const nameOfSpose=["Emma","Isabella","Sophia","Olivia"];
    return nameOfSpose[randomvalue(nameOfSpose.length)];
}
function Salary(){
    return randomvalue(2000001)-1000001;
}
function Age(){
    return randomvalue(21)+60;
}
function Career(){
    const Career=["Engineer", "Teacher", "Doctor","Hobo"];
    return Career[randomvalue(Career.length)];
}