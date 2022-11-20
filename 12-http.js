const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`
        <h1>Welcome to our home page</h1>
        <p>Yes</p>
        <a href="/about">go about</a>
        `)
    }
    else if(req.url === '/about'){
        res.end(`
        <h1>This is the about page</h1>
        <a href="/">back home</a>
        `)
    }else{
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
})

server.listen(5000)
