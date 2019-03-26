import React from 'react'
const DatabaseContext = React.createContext()
class Database {
    constructor() {
        this.dbName = "DabatabaXXX"
        console.log('Constructor of Database A')
    }
}
export {
    DatabaseContext,
    Database
}