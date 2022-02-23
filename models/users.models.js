const mysqlConnection = require('../config/mysql')







const newUser =   async ( fullname, email, phone_number, address, password, customer_id) => {
    return new Promise( (resolve, reject) => {
        mysqlConnection.query({
            sql: `Insert into users(fullname, email, phone_number, address, hashedPassword, customer_id)values(?,?,?,?,?,?)`,
            values: [fullname, email, phone_number, address, password, customer_id]
        }
         ,  (err, results, fields) => {
             if (err) {
               reject(err);
             }
             resolve(results);
         })
      })
}



const checkUser = async (email, phone_number) => {

    return new Promise((resolve, reject) => {

        mysqlConnection.query({
            sql: `select * from users where email=? or phone_number=?`,
            values: [email, phone_number]
        },
            (err, results, fields) => {
                if(err) {
                    reject(err)
                }
                resolve(results)
            })
    })
}


// updatingUser("address", "Toyin street alagomeji", email)


// const updatingUser =   async (field,dataToUpdate,email) => {
//     return new Promise( (resolve, reject) => {
//         mysqlConnection.query({
//             sql: `update users set ${field}=? where email=?`,
//             values: [dataToUpdate]
//         }
//          ,  (err, results, fields) => {
//              if (err) {
//                reject(err);
//              }
//              resolve(results);
//          })
//       })
 

// }




module.exports = {
    newUser,
    checkUser,
    // updatingUser,
}