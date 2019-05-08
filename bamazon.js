/**
 * CREATING THE CONNECTION
 */
const { createConnection } = require('mysql2')

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abigdog1!',
    database: 'bamazon_db'  
})
const process = require('process');
const userCommand = process.argv[2];
//grabbing inventory info
db.connect(e => {
    if (e) { console.log(e) }
    db.query('SELECT * FROM inventory', (e, data) => {
        if (e) { console.log(e) } else {
            data.forEach(({ id, item, amount }) => {
            console.log(`
            *********************
            ID: ${id} FOR ${item} 
            Availble: ${amount}
            *********************`)
        })
    }
    })
})


//taking ammount from inventory count under ammount.
db.connect(e => {
    if (e) { console.log(e) } else {
        db.query('DELETE FROM inventory WHERE `amount` = ?', [`${userCommand}`], (e, r) => {
            if (e) { console.log(e) } else {
                console.log(r)
                process.exit()

            }
        })
    }
})

