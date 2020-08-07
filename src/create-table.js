const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'novosga',
    database: 'etiquetario'
})

connection.connect(function (error){
    if (error) return console.log(error)
    console.log("Conectado")
    createTable(connection)
    

})

function createTable(conn){
    
    const sql = "CREATE TABLE IF NOT EXISTS Cliente (\n"+
    "ID int not null auto_increment, \n"+ 
    "Nome varchar(150) not null ,\n"+
    "Cpf char(11) not null, \n" +
    "Primary key (id)\n"+
    ");";

    conn.query(sql , function (error, results, fields){
        if (error) return console.log(error)
        console.log('Tabela criada com sucesso')
        addRows(connection)
    })

}

function addRows(conn){

    const sql = "insert into cliente (nome, cpf) values ?";
    const values = [
        ['Elicarlos', '01761432389'],
        ['Leydiane', '042141141411']
    ];

    conn.query(sql, [values], function(error, results, fields){
        if(error) return console.log(error)
        console.log('Produto salvo com sucesso')
        conn.end();
    })

}