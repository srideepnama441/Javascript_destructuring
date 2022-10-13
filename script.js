//Git commands 
//git init --to initialize local repositary
//git remote add origin https://github.com/srideepnama441/Javascript_destructuring.git

// object Destructing is a syntax in js introduced in es6
// Object is a collection of key value pairs where key is a "string" and value can be a "Number","string" or an "object" itself
// To get values form object
const employeeObject = {
    empID : "EMP001",
    Uname : "srideep",
    dept : "IT Support"
}

// with out destructing to access values in object we use as below
const name1 = employeeObject.Uname;

// to extract by destructing
const {empID, Uname} = employeeObject;
console.log(empID, Uname);

//complex object with nested objects
const complexObject ={
    empID:"EMP002",
    Uname:"srideep",
    dept:{
        deptID:"DPID001",
        deptName:"IT Support",
        address:{
            street:"SOMAJIGUDA",
            city:"Hyderabad"
        }
    },
}

//General way
//const street = complexObject.dept.address.street;

//with object destructing
const {dept:{address:{street}}}=complexObject;
const {dept:{address}}=complexObject;
console.log(street, address);

const empdept = {
    id:"EMPDPT001",
    name:"ROGER",
    dept:"Sports"
}
//below code we cannot acces dept in message as we didn't distruct before using it
// const {name,  messsage=`${name} is in ${dept} department`} = empdept
//below code works fine
const {name, dept, messsage=`${name} is in ${dept} department`} = empdept
console.log(name,messsage);

//object destructing aliases
const {id:employeeDepartmentID}=empdept
console.log(employeeDepartmentID);

//handling dyamanic name property i.e "we don't know the key of an object"

const empdeptdynamic ={
    id:"EMPDPT001",
    nameU:"ROGER",
    dept:"Sports"
}
// with out destructing
//let key ="id"
//empdeptdynamic[key];

function getPropertyvalue(key){
    //return empdeptdynamic[key];
    const {[key]: returnVal} =empdeptdynamic
    return returnVal;
}

let id =getPropertyvalue("id");
let nameU=getPropertyvalue("nameU");

console.log(id,nameU);

//destructure in to function parameter
