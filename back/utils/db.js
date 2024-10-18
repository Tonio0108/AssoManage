import mysql from 'mysql2'

const con = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "admins",
    database: "assomanage",
    port: "3306"
})

con.getConnection((err, conn) => {
    if(err) {
        console.log("connection error : "+err);
    } else {
        console.log("Connected");
        conn.release();
    }
})  


export default con;