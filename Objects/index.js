//THIS IS A SHALLOW OBJECT COPY //
//THIS IS A SHALLOW OBJECT COPY //
//THIS IS A SHALLOW OBJECT COPY //
const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    modulesCompleted: ['html', 'js', 'css']
    }  
    
const studentDetailsCopy = {}

Object.assign(studentDetailsCopy, studentDetails)
studentDetailsCopy.modulesCompleted[0] = 'react'
console.log(studentDetails)
console.log(studentDetailsCopy)
// ^THIS IS A SHALLOW OBJECT COPY ^//
// ^THIS IS A SHALLOW OBJECT COPY ^//
// ^THIS IS A SHALLOW OBJECT COPY ^//
//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//
//THIS IS A DEEP OBJECT COPY //
//THIS IS A DEEP OBJECT COPY //
//THIS IS A DEEP OBJECT COPY //

const deepClonedStudentDetails = structuredClone(studentDetails)
deepClonedStudentDetails.modulesCompleted[0] = 'TS'
console.log(studentDetails)
console.log(deepClonedStudentDetails)

// {firstName: "janaka", lastName: "siriwardena", age: 28, country: "sri lanka", email: "j.siri@totalinternet.com", discordUsername: "JS1", modulesCompleted: ["html", "js", "css"]}
// {firstName: "janaka", lastName: "siriwardena", age: 28, country: "sri lanka", email: "j.siri@totalinternet.com", discordUsername: "JS1", modulesCompleted: ["TS", "js", "css"]}

//^THIS IS A DEEP OBJECT COPY^ //
//^THIS IS A DEEP OBJECT COPY^ //
//^THIS IS A DEEP OBJECT COPY^ //
//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//

//Object with Methods and 'this' keyword//

const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        console.log(this)
        // console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}
// product.getProductInfo()


//bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, in this case 'product'
const productDetails = product.getProductInfo.bind(product)

productDetails()

