import React, {Component} from 'react'
import '../App.css'
/*
function doSomething() {
    const PI = 3.14 //const >> let >> var
    let x = 10
    var y = 100
    let str1 = 'Hello'
    let str2 = "Hoang"
    console.log(str1 + " " + str2)
}
*/
//Arrow function = anonymous function
const doSomething = () => {
    const PI = 3.14 //const >> let >> var
    let x = 10
    var y = 100
    let str1 = 'Hello'
    let str2 = "Hoang"
    console.log(str1 + " " + str2)
    //alert(`${str1}, ${str2}`)
    let x2 = 20
    if (x2 == '20') {
        //alert("Bang nhau...")
    }
    let x3 = 30
    if (x3 === 30) {
        //Equal type and value
        //alert("Bang nhau 222...")
    }
    //Define an object = HashtableMap trong Java
    var person = {
        name: "Hoang", 
        email: "hoang@gmail.com", 
        age: 30,
        "ten goi": "Hoang 123",
        sayHello: function(yourName) {
            return `Hello mr ${yourName}`
        },
        sayHello2: (yourName) => {
            return `Hello2 mr ${yourName}`
        }
    }
    //Array => ArrayList(Generics) trong Java
    let products = [
        {name: 'iphone4', year: 2011},
        {name: 'iphone 5', year: 2013},
        {name: 'iphone X', year: 2018}
    ]
    //Iterate 
    products.forEach(product => {
        console.log(`product is: ${JSON.stringify(product)}`)
    })
    let foundProduct = products.find(p => 
        p.year === 2013 && p.name.includes('iphone'))
    //unmutable change
    let filteredProducts = products.filter(p => {
        return p.name !== 'iphone4'
    })
    //products = filteredProducts
    //Map = mapping = anh xa
    let modifiedProducts = products.map(product => {
        return <h2 className='abc'>{`Name=${product.name}, year=${product.year}`}</h2>
    })
    //Add element to an array:
    products.push({name: 'iphone 7', year: 2017})
    let strA = "" 
    strA = JSON.stringify(person)
    strA = person.name
    strA = person["name"]
    strA = person["ten goi"]
    strA = person.sayHello('Kitty')
    strA = person.sayHello2('Meomeo')
    const {name, age, email2=''} = person
    strA = Object.keys(person)
    strA = JSON.stringify(products)
    strA = `Name = ${name}, year = ${age}, email=${email2}`
    //Update an existing object in an array
    let products2 = products.map(product => {
        if(product.name === 'iphone 5') {
            //let cloned = Object.assign({}, product)
            //let cloned = JSON.parse(JSON.stringify(product))//tham khao
            return {
                ...product,
                name: 'iphone 6'
            }
    
        } else {
            return product
        }
    })
    strA = JSON.stringify(products2)
    //nested callback, taskA and TaskB is asynchronous
    /*
    doTaskA(param1, param2, (result, error)=>{
        if(error) {
            console.log(`Error 1 ${error}`)
        } else {
            doTaskB(param3, param4, (result, error) => {
                if(error) {
                    console.log(`Error 2 ${error}`)
                } else {
                    //successful
                }
                
            })
        }
    })
    */
    //Promise = Future
    /* pseudo-code
    doTaskA(param1, param2).then(result => {
        doTaskB(param3, param4).then(result =>{

        }).catch(error => {

        })
    }).catch(error => {

    })
    */
    //async / await 
    /*
    try {
        await doTaskA(param1, param2)
        await doTaskB(param3, param4)
    } catch(error) {
        console.log(`Error = ${error}`)
    }
    */
    //localStorage.setItem("person", JSON.stringify({name: 'Hoang', age: 30}))
    let savedObject = JSON.parse(localStorage.getItem('person'))
    alert(`local storage = ${JSON.stringify(savedObject)}`)
    return strA
}
//Example of a Promise
const doAsynTaskA = (param1, param2) => {
    return new Promise((resolve, reject) => {
        //do something...
        setTimeout(() => {
            if (param1===1 && param2 === 2) {
                resolve({name: 'Hoang', age: 30})
            } else {
                reject("Something went wrong")
            }
        }, 5000)
    })
}
/*
const aFunctionCallPromise = async () => {
    try {
        let result = await doAsynTaskA(2,2)
        console.log('Promise result ='+JSON.stringify(result))
    } catch (error) {
        console.log(`ErrorPromise = ${error}`)
    }
}
*/
const aFunctionCallPromise = () => {
    doAsynTaskA(12,2).then(result => {
        console.log('Promise2 result ='+JSON.stringify(result))
    }).catch(error => {
        console.log(`ErrorPromise2 = ${error}`)
    })
    console.log('Do STH 2')
}
/*
const sum2Numbers = (x, y) => {
    return x + y;
}
*/

//one line 
const sum2Numbers = (x, y) => x + y

export {
    doSomething,
    sum2Numbers,
    aFunctionCallPromise
}





