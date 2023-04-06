let mongoose = require('mongoose');

const server = 'mongodb+srv://root:root123@cluster0.hfbob.azure.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'demo'; // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error(err)
            })
    }
}

module.exports = new Database()
