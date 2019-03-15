
const doSomething = () => {
    var x = 10
    if(x == '10') {
        // alert('It is 10')
    }
    //Compare 
    if(x === 10) {
        // alert('It is true')
    }
    //undefined and not defined
    var a;
    //alert(`a = ${a}`)
    // if(a === undefined) {}
    // alert(`a2 = ${a2}`)
    if(1) {
        let x = 11
    }
    // alert(`x = ${x}`)
    let name="Hoang"
    let email = "hoang@gmail.com"
    // alert(`Name = ${name}, email = ${email}`)    
    //Object
    var person = {name: "Hoang", email: "hoang@gmail.com"}
    //key can be number, Vietnamese string
    //person.name.length    
    //alert(`person = ${JSON.stringify(person)}`)
    // let {name, email} = person
    //alert(`Name = ${name}, email = ${email}`)    
    //Delete an object
    var products = [{name: "iphone X",year: 2018}, {name: "iphone 6", year:2016}];
    products.forEach((product, index) => {
        console.log(`product = ${JSON.stringify(product)}, index = ${index}`)
    });    
    

}
function multiply(x, y) {
    alert(`x . y = ${x * y}`)        
    return x * y;
}
//local storage
const testLocalStorage = () => {
    //localStorage.setItem('name', 'Hoang')
    alert(`Name = ${localStorage.getItem('name')}`)
}
//Promise function 
const doPromiseA = (param1, param2) => {
    return new Promise((resolve, reject) => {
        if(param1 == 1 && param2 == 2) {
            resolve("Successful")
        } else {
            reject("Failed")
        }
    })
}
export {
    doSomething,
    multiply,
    testLocalStorage,
    doPromiseA
}
