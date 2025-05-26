const { readFileSync } = require("fs")
const http = require("http")

const PORT = 12345

const about = readFileSync(`./pages/about.html`)
const mainpage = readFileSync(`./pages/main.html`)
const more = readFileSync(`./pages/more.html`)
const notfound = readFileSync(`./pages/notfound.html`)

const server = http.createServer((req , res) => {
    if(req.url == `/`){
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.write(mainpage)
        res.end()
    }
    else if (req.url == `/about`){
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.write(about)
        res.end
    }
    else if(req.url == `/more`){
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.write(more)
        res.end()
    }
    else{
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.write(notfound)
        res.end()
    }
})

server.listen(PORT , () =>{
    console.log(`visit http://localhost:${PORT}`)
})
