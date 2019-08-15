const http = require('http');
let users = [
    {
        id: 1,
        name: 'zd'
    },
    {
        id: 1,
        name: 'zd2'
    }
]
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin",'*')

    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    }else{
        res.end('NOT FOUND')
    }
}).listen(3000,()=>{
    console.log('success 3000')
})