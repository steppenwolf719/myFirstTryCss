const express = require('express') /*chama o express - é uma função*/
const nunjucks = require ('nunjucks') /* chama o nunjucks */

const server = express() /*executa o express - chama a função*/

server.use(express.static('public'))

server.set("view engine", "html") /*Tudo q for html, vou usar. */

nunjucks.configure("views", {
    express: server
})

/*Servidor retorna um Oi - Na area do browser - */ 
server.get("/views/index", function(req, res){ /* requisition e response*/ 
    return res.render("index") /*se usar nodemon n precisa mais npm start*/
})

server.get("/views/portfolio", function (req, res) {
    return res.render("portfolio")
})

server.listen(5000, function() { /*Servidor fica "ouvindo"*/ 
    console.log("Server is running...")
}) /*Servidor fica "ouvindo"*/ 