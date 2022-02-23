const mysqlConnection = require('../config/mysql')



const newPackage = async (item_name, price, quantity_in_stock, package_id) => {
    return new Promise((resolve,reject) => {
        mysqlConnection.query({
            sql: `Insert into packages(item_name, price, quantity_in_stock, package_id)values(?,?,?,?)`,
            values: [item_name, price, quantity_in_stock, package_id]    
        },
            (err, results,fields) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
        })
    })
}



const listAllPackages = () => {
    return new Promise( (resolve, reject) => {
        mysqlConnection.query(
            {
                sql: `select * from packages  `,
                values: []
            },
            (err, results, fields) => {
                if (err) {
                  reject(err);
                }
                resolve(results);
        })

    })
}


const fetchAPackage = async (package_id) => {
   
    return new Promise((resolve, reject) => {

        mysqlConnection.query({
            sql: `select * from packages where package_id=?`,
            values: [package_id]
        },
          (err, results, fields) => {
                if (err) {
                 reject(err)
                }
                resolve(results)
          })
    })
}



const updatePackageStatus = async (package_id, item_name) => {
    return new Promise( (resolve,reject) => {
        mysqlConnection.query({
            sql: `INSERT into packages(package_id, item_name) VALUES(?,?)`,
            values: [package_id, item_name]

        })
            , (err,results,fields) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
            }
    })
}




module.exports = {
    newPackage,
    listAllPackages,
    fetchAPackage,
    updatePackageStatus
}