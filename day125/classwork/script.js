//protocol status 200 === okay / succesfully connected
//protoclol status 404 === page not found

const http = require("http")
const { readFileSync } = require("fs")

const html = readFileSync(`./pages/index.html`)
const css = readFileSync(`./style.css`)
const error404 = readFileSync(`./pages/notfound.html`)

const server = http.createServer((req , res) =>{
    if(req.url === "/"){
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.write(html)
        res.end()
    }
    else if(req.url === "/style.css"){
        res.writeHead(200 , {"Content-Type": "text/css"})
        res.write(css)
        res.end()
    }
    else if(req.url === "/book"){
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.end("books")
    }
    else{
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.write(error404)
        res.end()
    }
})

const PORT = 12345
server.listen(PORT , () => {
    console.log(`visit http://localhost:${PORT}`)
})
