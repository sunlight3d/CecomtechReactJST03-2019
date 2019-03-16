
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
    
    var products2 = products.concat({name:'iphone 5', year: 2015})
    console.log(`products2 = ${JSON.stringify(products2)}`)
    //Update an item 
    //products[1].name = "iphone XX"
    var products3 = products.map((product, index) => {
        if(product.name === "iphone 6") {
            //Mutable
            //product.year = 2020
            //Unmutable
            return {
                ...product,
                year: 2021
            }
        }
        return product
    })
    //Delete an item 
    products = products.filter(product => {
        return product.name !== "iphone 6"
    })
    //Find an element
    let foundProduct = products.find((product) => {
        return product.year === 2018
    })
    console.log(`products = ${JSON.stringify(products)}`)
    console.log(`foundIndex = ${JSON.stringify(foundProduct)}`)
    //Convert array to string 
    var strings = ["name='Hoang'", "age=30"]
    var outputString = strings.join(", ")
    console.log(`outputString = ${outputString}`)
    //Sort an array
    var users = [{name: 'John', age: 22}, {name: "Hoang", age: 30}, {name: 'Thanh', age: 21}, {name: "Minh", age: 33}]
    users.sort((user1, user2) => {
        return user1.age - user2.age
    })
    console.log(`users = ${JSON.stringify(users)}`) 
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
//funtion with async/await:
const doAsyncAwait = async () => {
    try {
        await doPromiseA(1,2)
        console.log('do promise successfully')
    } catch(e) {
        console.log(`Error = ${e}`)
    }
}
export {
    doSomething,
    multiply,
    testLocalStorage,
    doPromiseA,
    doAsyncAwait
}
